// createOrder;
// proceedToPayments;
// showOrderSummary;

const cart = ["pent", "shirt", "t-shirt"];

// const createOrderPromise = createOrder(cart);
// console.log("createOrderPromise ==>", createOrderPromise);

createOrder(cart)
  .then((orderId) => {
    return proceedToPayments(orderId);
  })
  // .then((orderId) => {
  //   console.log("orderId ==>", orderId);
  //   return proceedToPayments(orderId);
  // })
  .then((payments) => {
    console.log("payments ==>", payments);
    return showOrderSummary(payments.data.transcriptId);
  })
  .then((orderSummary) => {
    console.log("orderSummary ==>", orderSummary);
  })
  .catch((err) => {
    console.log("Error ==>", err);
  });

function createOrder(cart) {
  const createOrderPromise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not validated");
      reject(err.message);
    }
    // create Order and return the Promise
    resolve("123445");
  });
  return createOrderPromise;
}

function proceedToPayments(orderId) {
  const proceedToPaymentsPromise = new Promise((resolve, reject) => {
    if (!isPaymentSuccessFull(orderId)) {
      const err = new Error("Error in Payments");
      reject(err.message);
    }

    setTimeout(() => {
      resolve({
        data: {
          transcriptId: "2348uijrm2p3rjoflv"
        },
        message: "Payment success"
      });
    }, 5000);
  });
  return proceedToPaymentsPromise;
}

function showOrderSummary(transcriptId) {
  console.log("transcriptId ==>", transcriptId);
  const showOrderSummaryPromise = new Promise((resolve, reject) => {
    if (!isAPISuccess()) {
      const err = new Error("Not able to get Order Summary");
      reject(err.message);
    }

    setTimeout(() => {
      resolve({
        data: {
          order: {
            orderId: "pierlqwkjfop3",
            price: 1000,
            quantity: 2
          }
        }
      });
    }, 5000);
  });
  return showOrderSummaryPromise;
}

function validateCart(cart) {
  return true;
}

function isPaymentSuccessFull(orderId) {
  return true;
}

function isAPISuccess() {
  return true;
}
