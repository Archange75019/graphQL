

const Products = [
    {
      productName: 'PC portable LENOVO IDEAPAD 3 17ADA05 ',
      ean: '65833254',
      category: 'PC portable',
      description: 'Ecran 17.3 pouces HD non tactile (1600 x 900 pixels) Processeur AMD Ryzen 5-3500U (2.1 GHz) RAM 8 Go DDR4 - 512 Go SSD Windows 10 - HDMI - WiFi 802.11 ac - Bluetooth',
      prixHT:     599.99,
      produitsAssocies:['65833271']
    },
    {
      productName: 'PC portable HP PAVILION GAMING 15-DK1071NF',
      ean: '65833244',
      category: 'PC portable',
      description: 'Ecran 15,6" Full HD Processeur Intel® Core™ i5-10300H (2,5 GHz / jusqu\'à 4,5 GHz) RAM 8 Go - 512 Go SSD - Carte graphique Nvidia GF GTX 1650 4 Go Windows 10 - HDMI - Wifi 802.11 ac - BT 5.0'      ,
      prixHT:       749.99,
      produitsAssocies: ['65833270']
    },
    {
      productName: 'Sacoche pour ordinateur portable HP ESSENTIAL TOP LOAD 15,6"',
      ean: '65833270',
      category: 'Accessoire',
      description:  'Sacoche pour ordinateur portable Pour ordinateur portable jusqu\'à 15,6"',
      prixHT:       29.99,
      produitsAssocies: ['65833244']
    },
    {
      productName: 'SACOCHE TARGUS GEOLITE ESSENTIAL 17.3"',
      ean: '65833271',
      category: 'accessoire',
      description: 'SACOCHE TARGUS GEOLITE ESSENTIAL 17.3"'      ,
      prixHT:       24.99,
      produitsAssocies: ['65833254']
    }
  ];

  function calcTVA(){
  for(i= 0; i< Products.length; i++){
    for(property in Products[i]){
        Products[i].tva = Products[i].prixHT / 100 * parseFloat(process.env.TVA);
        Products[i].prixTTC = Products[i].prixHT + Products[i].tva;
    };
  };
};
calcTVA()
  

  module.exports  = Products;