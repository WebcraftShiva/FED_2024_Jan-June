// async-await:
function delay(data) {
    return new Promise(resolve => {
      setTimeout(resolve, data);
    });
  }
  
  async function greet() {
    console.log("Hello!");
    await delay(2000);
    console.log("World!");
  }
  greet();