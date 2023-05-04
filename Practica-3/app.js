
  const product = { 
    count: 3, 
    price: 47,
     type:  "libro"
    };

    let preciototal;
    product.count > 0 ? preciototal = product.count * product.price : preciototal = 0 ;

    console.log("Precio Total");
    console.log(preciototal);

    let tipoIva;
    switch (product.type) {
      case "alimento": tipoIva = 0.1
        break;
      case "libro" : tipoIva = 0.04
        break;
      default: tipoIva = 0.21;
        break;
    }

    console.log("Precio unitario con IVA")
    let precioconIVA = product.price * (1 + tipoIva);
    console.log(precioconIVA);


    console.log("Precio Final")
    let preciofinal = precioconIVA * product.count;
    console.log(preciofinal);
