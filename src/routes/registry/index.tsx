import { h } from 'preact';
import { Link } from 'preact-router/match';

type RegistryItem = {
  title: string;
  imageUrl: string | null;
  custom: boolean;
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
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com',
  }],
});

const knifeBlock = (): RegistryItem => ({
  title: 'Magnetic Knife Block',
  imageUrl: 'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/297994525_1407734429709028_6213937687613865223_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=dZnxREgKylQAX9NPImX&_nc_ht=scontent-mia3-1.xx&oh=00_AfD_RyyiZ1Q4wP3jAOPE2bv-HnW-mxQ9KFuZe3xL2W0tFg&oe=6446CFE2',
  custom: true,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com',
  }],
});

const coupeGlasses = (): RegistryItem => ({
  title: 'Coupe Cocktail Glasses (8pc, crystal)',
  imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202311/0024/img95o.jpg',
  custom: false,
  vendors: [{
    name: 'Williams Sonoma',
    url: 'https://www.williams-sonoma.com/',
  }],
});

const silverware = (): RegistryItem => ({
  title: 'Silverware (20pc)',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0592/2026/3088/products/cabria_square_5_1270x.jpg?v=1631912542/',
  custom: false,
  vendors: [{
    name: 'Williams Sonoma',
    url: 'https://www.williams-sonoma.com/',
  }, {
    name: 'Oneida',
    url: 'https://www.oneida.com/',
  }],
});

const metalColander = (): RegistryItem => ({
  title: 'Metal Colander',
  imageUrl: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202314/0415/img28o.jpg',
  custom: false,
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
  vendors: [{
    name: 'Williams Sonoma',
    url: 'https://www.williams-sonoma.com/products/frieling-citrus-press/'
  }],
});

const vitamix = (): RegistryItem => ({
  title: 'Vitamix',
  imageUrl: 'https://m.media-amazon.com/images/I/710037deVKL._AC_SL1500_.jpg',
  custom: false,
  vendors: [{
    name: 'Vitamix',
    url: 'https://www.vitamix.com/',
  }],
});

const kitchenAid = (): RegistryItem => ({
  title: 'Kitchen Aid (red)',
  imageUrl: 'https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-KSM7586PCA.tif',
  custom: false,
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
    coupeGlasses(),
    silverware(),
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
  vendors: [{
    name: 'BILT/JP Cycles',
    url: 'https://www.jpcycles.com/product/bilt-vertex-parabola-helmet',
  }],
});

const hjcHelmet = (): RegistryItem => ({
  title: 'Motorcycle Helmet (female xs white/pink)',
  imageUrl: 'https://www.jpcycles.com/_a/product_images/1466/9365/hjcis_cruiser_fior_womens_helmet_750x750.jpg',
  custom: false,
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
    {!!item.imageUrl && <div style="width: 400px; height: 400px; overflow: hidden; display: flex; justify-content: center"><img src={item.imageUrl} style="height: 100%"></img></div>}
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
  </div>
);

const Back = () => (
  <Link href='/'>&lt; Back</Link>
);

const Disclaimer = () => (
  <div class="card" style="font-style: italic; line-height: 3.5rem; font-size: 3rem; font-weight: bold; text-align: center">
    <p>Gifts are Great!</p>
    <p>Experiences are better.</p>
    <p>Help us experience the world together.</p>
    <p>Fund mission trip or world travel!</p>
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
