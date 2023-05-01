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
  imageUrl: 'assets/images/registry/wine-rack.jpg',
  custom: true,
  notes: null,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com',
  }],
});

const knifeBlock = (): RegistryItem => ({
  title: 'Magnetic Knife Block',
  imageUrl: 'assets/images/registry/magnetic-knife-block.jpg',
  custom: true,
  notes: null,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com',
  }],
});

const chefKnives = (): RegistryItem => ({
  title: 'Damascus 4 Piece Chef\'s Knife Set',
  imageUrl: 'assets/images/registry/damascus-knives.webp',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Arbor Novo',
    url: 'https://arbornovo.com/collections/gourmet-chefs-knives/products/damascus-4-piece-chef-set',
  }],
});

const coupeGlasses = (): RegistryItem => ({
  title: 'Hexagon Etched Coupe Cocktail Glasses',
  imageUrl: 'assets/images/registry/coupe-glasses.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Amazon',
    url: 'https://www.amazon.com/Amehla-Educated-Collection-Handblown-Teardrop/dp/B0962R937V?th=1',
  }],
});

const rocksGlasses = (): RegistryItem => ({
  title: 'Honeycomb Rocks Glasses',
  imageUrl: 'assets/images/registry/rocks-glasses.webp',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Collins and Coupe',
    url: 'https://www.collinsandcoupe.com/product/honeycomb-rocks-glass-12oz/1980',
  }],
});

const silverwareMain = (): RegistryItem => ({
  title: 'Mepra Moretto Stainless Steel Flatware (5pc)',
  imageUrl: 'assets/images/registry/flatware.jpg',
  custom: false,
  notes: 'We are looking for 6 place settings.',
  vendors: [{
    name: 'Macy\'s',
    url: 'https://www.macys.com/shop/product/moretto-ice-flatware-set-5-piece?ID=11776525',
  }, {
    name: 'Pottery Barn',
    url: 'https://www.potterybarn.com/products/mepra-moretto-flatware/',
  }],
});

const silverwareServing = (): RegistryItem => ({
  title: 'Mepra Moretto Stainless Steel Flatware (3pc)',
  imageUrl: 'assets/images/registry/serving-flatware.webp',
  custom: false,
  notes: 'We only need one serving set.',
  vendors: [{
    name: 'Watfair',
    url: 'https://www.wayfair.com/kitchen-tabletop/pdp/mepra-3-pcs-serving-set-fork-spoon-and-ladle-moretto-ndft1375.html?piid=60430098',
  }],
});

const steakKnives = (): RegistryItem => ({
  title: 'Pakka Wood 6 Piece Steak Knife Set',
  imageUrl: 'assets/images/registry/steak-knives.webp',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Macys',
    url: 'https://www.macys.com/shop/product/berghoff-pakka-wood-6-piece-steak-knife-set-with-wooden-case?ID=7490819',
  }],
});

const metalColander = (): RegistryItem => ({
  title: 'Metal Colander',
  imageUrl: 'assets/images/registry/colander.jpg',
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
  imageUrl: 'assets/images/registry/citrus-press.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Williams Sonoma',
    url: 'https://www.williams-sonoma.com/products/frieling-citrus-press/'
  }],
});

const vitamix = (): RegistryItem => ({
  title: 'Vitamix',
  imageUrl: 'assets/images/registry/vitamix.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'Vitamix',
    url: 'https://www.vitamix.com/',
  }],
});

const kitchenAid = (): RegistryItem => ({
  title: 'Kitchen Aid (red)',
  imageUrl: 'assets/images/registry/kitchen-aid.jpg',
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
  imageUrl: 'assets/images/registry/dehydrater.jpg',
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
  imageUrl: 'assets/images/registry/bilt-helmet.jpg',
  custom: false,
  notes: null,
  vendors: [{
    name: 'BILT/JP Cycles',
    url: 'https://www.jpcycles.com/product/bilt-vertex-parabola-helmet',
  }],
});

const hjcHelmet = (): RegistryItem => ({
  title: 'Motorcycle Helmet (female xs white/pink)',
  imageUrl: 'assets/images/registry/hjc-helmet.jpg',
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
  imageUrl: 'assets/images/registry/bicycle-lights.jpg',
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
  imageUrl: 'assets/images/registry/bike-rack.jpg',
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
  imageUrl: 'assets/images/registry/bike-basket.jpg',
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

const GoogleDoc = () => (
  <div class='card' style='font-size: 16pt'>
    <a href='https://docs.google.com/spreadsheets/d/1Br0bFislG0E_UBtrzWxSO29IP-8En6fjO-0YZWFcM1k/edit?usp=sharing' target='_blank'>Purchased an item? List it here!</a>
  </div>
);

const Content = () => (
  <div class="columns">
    <h1>{REGISTRY.title}</h1>
    <Disclaimer></Disclaimer>
    <GoogleDoc></GoogleDoc>
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
