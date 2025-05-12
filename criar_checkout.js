// criar_checkout.js
import Stripe from 'stripe';

const stripe = new Stripe('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', {
  apiVersion: '2023-10-16',
});

async function criarCheckout() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Acesso ao FoodBot Pro',
          },
          unit_amount: 5000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: {
      uid: 'vitor123',
    },
    success_url: 'https://foodbot.app/sucesso',
    cancel_url: 'https://foodbot.app/erro',
  });

  console.log('✅ Checkout criado:', session.url);
}

criarCheckout().catch(console.error);
