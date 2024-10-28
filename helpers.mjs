const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return dummyPromise;
};

export default connectToDatabase;


// docker build .
// docker run -p 5000:5000 sha256:16a4b6c68b1755bf755af3f9b2b6c0fa5faf8e8a9bf29ceafa5c2bbad5249876