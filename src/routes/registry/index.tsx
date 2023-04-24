import { h } from 'preact';
import { Link } from 'preact-router/match';

type RegistryItem = {
  title: string;
  imageUrl: string | null;
  custom: boolean;
  notes: string | null;
  vendors: {
    name: string;
    url: string | null;
  }[],
};

type RegistryItemGroup = {
  title: string;
  items: RegistryItem[];
};

type Registry = {
  title: string;
  groups: RegistryItemGroup[];
};

const wineHolder = (): RegistryItem => ({
  title: 'Sculpted 5 Bottle Wine Holder',
  imageUrl: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/337862956_554731729834260_814937494578009418_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=GtNvka5aaVYAX9IV9kf&_nc_ht=scontent-mia3-1.xx&oh=00_AfAPSryAhcusPQixW-iENPVJdMwTCuC4cls4Uk7L0xfDKw&oe=64462294',
  custom: true,
  notes: null,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com',
  }],
});

const knifeBlock = (): RegistryItem => ({
  title: 'Magnetic Knife Block',
  imageUrl: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/297994525_1407734429709028_6213937687613865223_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=dZnxREgKylQAX9NPImX&_nc_ht=scontent-mia3-1.xx&oh=00_AfD_RyyiZ1Q4wP3jAOPE2bv-HnW-mxQ9KFuZe3xL2W0tFg&oe=6446CFE2',
  custom: true,
  notes: null,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com',
  }],
});

const chefKnives = (): RegistryItem => ({
  title: 'Damascus 4 Piece Chef\'s Knife Set',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0531/6703/0467/products/HandForgedDamascus4PieceChefsKnifeSetWithLeatherKnifeRoll_540x.jpg?v=1647111722',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com/collections/gourmet-chefs-knives/products/damascus-4-piece-chef-set',
  }],
});

const coupeGlasses = (): RegistryItem => ({
  title: 'Hexagon Etched Coupe Cocktail Glasses',
  imageUrl: 'https://m.media-amazon.com/images/I/61f4niZKJTS._AC_SX569_.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Amazon',
    url: 'https://www.amazon.com/Amehla-Educated-Collection-Handblown-Teardrop/dp/B0962R937V?th=1',
  }],
});

const rocksGlasses = (): RegistryItem => ({
  title: 'Honeycomb Rocks Glasses',
  imageUrl: 'https://www.collinsandcoupe.com/uploads/1/3/1/2/131299988/s882552904445137385_p1980_i1_w590.jpeg?width=2000&optimize=medium',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Collins and Coupe',
    url: 'https://www.collinsandcoupe.com/product/honeycomb-rocks-glass-12oz/1980',
  }],
});

const silverwareMain = (): RegistryItem => ({
  title: 'Mepra Moretto Stainless Steel Flatware (5pc)',
  imageUrl: 'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202250/0148/mepra-moretto-stainless-steel-flatware-sets-l.jpg',
  custom: false,
  notes: 'We are looking for 6 place settings.',
  vendors: [{
    name: 'Pottery Barn',
    url: 'https://www.potterybarn.com/products/mepra-moretto-flatware/',
  }],
});

const silverwareServing = (): RegistryItem => ({
  title: 'Mepra Moretto Stainless Steel Flatware (3pc)',
  imageUrl: 'https://secure.img1-fg.wfcdn.com/im/58051658/resize-h755-w755%5Ecompr-r85/2136/213603402/Mepra+3+Pcs+Serving+Set+%28Fork+Spoon+and+Ladle%29+Moretto.jpg',
  custom: false,
  notes: 'We only need one serving set.',
  vendors: [{
    name: 'Watfair',
    url: 'https://www.wayfair.com/kitchen-tabletop/pdp/mepra-3-pcs-serving-set-fork-spoon-and-ladle-moretto-ndft1375.html?piid=60430098',
  }],
});

const steakKnives = (): RegistryItem => ({
  title: 'Pakka Wood 6 Piece Steak Knife Set',
  imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/10898414_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Macys',
    url: 'https://www.macys.com/shop/product/berghoff-pakka-wood-6-piece-steak-knife-set-with-wooden-case?ID=7490819',
  }],
});

const metalColander = (): RegistryItem => ({
  title: 'Metal Colander',
  imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202314/0415/img28o.jpg',
  custom: false,
  notes: null,
  vendors: [
    {
      name: 'Williams Sonoma',
      url: 'https://www.williams-sonoma.com/products/all-clad-stainless-steel-colander'
    },
    {
      name: 'any',
      url: null,
    },
  ],
});

const citrusPress = (): RegistryItem => ({
  title: 'Metal Citrus Press',
  imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202308/0148/img41o.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Williams Sonoma',
    url: 'https://www.williams-sonoma.com/products/frieling-citrus-press/'
  }],
});

const vitamix = (): RegistryItem => ({
  title: 'Vitamix',
  imageUrl: 'https://m.media-amazon.com/images/I/710037deVKL._AC_SL1500_.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Vitamix',
    url: 'https://www.vitamix.com/',
  }],
});

const kitchenAid = (): RegistryItem => ({
  title: 'Kitchen Aid (red)',
  imageUrl: 'https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-KSM7586PCA.tif',
  custom: false,
  notes: null,
  vendors: [
    {
      name: 'KitchenAid',
      url: 'https://www.kitchenaid.com/',
    },
  ],
});

const dehydrater = (): RegistryItem => ({
  title: 'Food Dehydrater',
  imageUrl: 'https://m.media-amazon.com/images/I/81x-HlXaxgL._AC_SL1500_.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'any',
    url: null,
  }],
});

const homeAndKitchen = (): RegistryItemGroup => ({
  title: 'Home & Kitchen',
  items: [
    wineHolder(),
    knifeBlock(),
    chefKnives(),
    coupeGlasses(),
    rocksGlasses(),
    silverwareMain(),
    silverwareServing(),
    steakKnives(),
    metalColander(),
    citrusPress(),
    vitamix(),
    kitchenAid(),
    dehydrater(),
  ],
});

const biltHelmet = (): RegistryItem => ({
  title: 'Motorcycle Helmet (female xs black/pink)',
  imageUrl: 'https://www.jpcycles.com/_a/product_images/1529/2538/bilt_vertex_parabola_helmet_black_pink_750x750.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'BILT/JP Cycles',
    url: 'https://www.jpcycles.com/product/bilt-vertex-parabola-helmet',
  }],
});

const hjcHelmet = (): RegistryItem => ({
  title: 'Motorcycle Helmet (female xs white/pink)',
  imageUrl: 'https://www.jpcycles.com/_a/product_images/1466/9365/hjcis_cruiser_fior_womens_helmet_750x750.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'HJC/JP Cycles',
    url: 'https://www.jpcycles.com/product/hjc-is-cruiser-fior-womens-helmet',
  }],
});

const motorcycleGear = (): RegistryItemGroup => ({
  title: 'Motorcycle Gear',
  items: [
    biltHelmet(),
    hjcHelmet(),
  ],
});

const bicycleLights = (): RegistryItem => ({
  title: 'Bicycle Lights',
  imageUrl: 'https://m.media-amazon.com/images/I/71fZGZa7YrL._AC_SL1500_.jpg',
  custom: false,
  notes: null,
  vendors: [
    {
      name: 'any',
      url: null,
    }
  ],
});

const bikeRack = (): RegistryItem => ({
  title: 'Bicycle Luggage Rack',
  imageUrl: 'https://m.media-amazon.com/images/I/71Qi9vtWapL._AC_SX679_.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Amazon',
    url: 'https://www.amazon.com/BABEIYXM-Adjustable-Aluminum-Bicycle-Install/dp/B0B7DRTPL4?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1VY9ORCD1RFGJ&th=1',
  }, {
    name: 'any',
    url: null,
  }],
});

const bikeBasket1 = (): RegistryItem => ({
  title: 'Bicycle Basket (natural)',
  imageUrl: 'https://m.media-amazon.com/images/I/71KUl-yuFIL._AC_SX679_.jpg',
  custom: false,
  notes: null,
  vendors: [
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/Makimoo-Cruiser-Original-Handlebar-Classic-Handmade/dp/B098F1BKJQ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2FZYUZYTLXCVV',
    }
  ],
});

const bicycleGear = (): RegistryItemGroup => ({
  title: 'Bicycle Gear',
  items: [
    bicycleLights(),
    bikeRack(),
    bikeBasket1(),
  ],
});

const registry = (): Registry => ({
  title: 'Bridal Shower Registry',
  groups: [
    homeAndKitchen(),
    motorcycleGear(),
    bicycleGear(),
  ],
});

const REGISTRY = {
  ...registry()
} as const;

const Item = (item: RegistryItem) => (
  <div class="columns card">
    <h3>{item.title}</h3>
    {!!item.imageUrl && <div class="square" style="overflow: hidden; display: flex; justify-content: center"><img src={item.imageUrl} style="height: 100%"></img></div>}
    {item.vendors && <div>
      <span>{item.vendors.length > 1 ? 'Vendors' : 'Vendor'}:&nbsp;</span>{ item.vendors &&
        item.vendors.map((vendor) => (
          vendor.url
           ? <a href={vendor.url} target="_blank">{vendor.name}</a>
           : <span>{vendor.name}</span>
        )).reduce((prev, curr) => [prev, ', ', curr] as any)
      }
      {item.custom && <span>&nbsp;(Custom to Order)</span>}
    </div>}
    {!!item.notes && <p><span>Notes:&nbsp;</span><br></br>{item.notes}</p>}
  </div>
);

const Back = () => (
  <Link href='/'>&lt; Back</Link>
);

const Disclaimer = () => (
  <div class="card font-xl" style="font-style: italic; font-weight: bold; text-align: center">
    <p>Gifts are Great!</p>
    <p>Experiences are better.</p>
    <p>Help us experience the world together.</p>
    <p>Fund our mission trip or world travel!</p>
  </div>
);

const Group = (group: RegistryItemGroup) => (
  <div class="columns">
    <h2>{group.title}</h2>
    <div class="grid">
      {group.items.map((item) => <Item {...item}></Item>)}
    </div>
  </div>
);

const Content = () => (
  <div class="columns">
    <h1>{REGISTRY.title}</h1>
    <Disclaimer></Disclaimer>
    {REGISTRY.groups.map((group) => <Group {...group}></Group>)}
  </div>
);

const Registry = () => {
  return (
    <div class="columns">
      <Back />
      <Content />
    </div>
  );
};

export default Registry;
