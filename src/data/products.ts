export type Category = 'plumbing' | 'hvac';

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  badge: string;
  brand?: string;
  sku?: string;
  stockStatus?: string;
  eta?: string;
  highlights?: string[];
};

export const categories: Array<{ key: Category; label: string; subtitle: string }> = [
  {
    key: 'plumbing',
    label: 'Plumbing',
    subtitle: 'Pumps, fittings, valves, and repair essentials'
  },
  {
    key: 'hvac',
    label: 'HVAC',
    subtitle: 'Heating, cooling, controls, and air system parts'
  }
];

export const products: Product[] = [
  // ─── PLUMBING ────────────────────────────────────────────────────────────────
  {
    id: 'plumb-1',
    name: '1/3 HP Residential Drain Pump – 115V, 10 ft Cord, 1-1/2" Connections',
    category: 'plumbing',
    price: 343.50,
    description:
      'Compact, fully automatic drain pump system designed for removing gray wastewater from fixtures below gravity lines. Features a low-profile 4.3-gallon tank (only 11" tall), pre-assembled and ready to install. Ideal for bar sinks, laundry trays, dehumidifiers, utility sinks, and gray waste-water drainage.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/404-3.jpg',
    badge: 'Best Seller',
    brand: 'Liberty Pumps',
    sku: '404',
    stockStatus: 'In Stock',
    eta: 'Get 187 by Thu, May 21',
    highlights: [
      '1/3 HP motor, 115V / 10 ft cord',
      '35 GPM at 5 ft head',
      '3/8" solids-handling capability',
      '4.3-gal tank, only 11" tall',
      '1-1/2" FNPT connections',
      'Pre-assembled & fully automatic'
    ]
  },
  {
    id: 'plumb-2',
    name: 'Float Switch Assembly – K001054',
    category: 'plumbing',
    price: 34.56,
    description:
      'OEM Liberty Pumps replacement float switch assembly for selected Liberty submersible pumps. Controls automatic on/off operation based on liquid level in the sump or basin. Designed for residential sump pits, sewage basins, and effluent applications.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/k001054-3.jpg',
    badge: 'Replacement Part',
    brand: 'Liberty Pumps',
    sku: 'K001054',
    stockStatus: 'In Stock',
    eta: 'Get 271 by Thu, May 21',
    highlights: [
      'OEM Liberty Pumps part',
      'Automatic on/off float control',
      'For sump, sewage & effluent basins',
      'Plug-and-play replacement',
      'Factory lead length matched',
      'Application: Replacement Part'
    ]
  },
  {
    id: 'plumb-3',
    name: '1/2 HP Portable Aluminum Transfer Pump – 115V, 20 ft Cord, Garden Hose Connection',
    category: 'plumbing',
    price: 304.50,
    description:
      'Heavy-duty portable transfer pump with a 1/2 HP motor and durable one-piece cast aluminum housing. Features a convenient On/Off switch, 3/4" brass garden hose connectors, and an integral carry handle. Ideal for general water transfer, pool cover drainage, filling livestock tanks, and draining water heaters.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/331-4.jpg',
    badge: 'Popular',
    brand: 'Liberty Pumps',
    sku: '331',
    stockStatus: 'In Stock',
    eta: 'Get 149 by Thu, May 21',
    highlights: [
      '1/2 HP motor, 115V / 20 ft cord',
      '105 ft shutoff head',
      '23 GPM at 5 ft head',
      'Cast aluminum housing with handle',
      '3/4" brass garden hose connectors',
      'Easily replaced motor brushes'
    ]
  },
  {
    id: 'plumb-4',
    name: '1/2" Lead Free Water Service Vacuum Relief Valve – LFN36M1',
    category: 'plumbing',
    price: 34.56,
    description:
      'Lead-free vacuum relief valve for water heater and tank applications. Automatically allows air into the piping system to prevent vacuum conditions that could siphon water and damage equipment. Meets low-lead requirements and ANSI standards.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/0556031-2.jpg',
    badge: 'Valve',
    brand: 'Watts',
    sku: 'LFN36M1',
    stockStatus: 'In Stock',
    eta: 'Get 305 by Thu, May 22',
    highlights: [
      '1/2" NPT male connection',
      'Lead-free brass construction',
      'Max working pressure: 200 PSI',
      'Max temperature: 250°F',
      'Prevents vacuum-induced damage',
      'NSF/ANSI certified'
    ]
  },
  {
    id: 'plumb-5',
    name: 'Mini-Rester Water Hammer Arrestor – 3/8" OD Compression Tee',
    category: 'plumbing',
    price: 19.68,
    description:
      'Piston-type water hammer arrestor designed to reduce shock and noise in high-speed water delivery systems. Features a 304 stainless steel body with a polypropylene piston and EPDM o-rings for long-lasting, maintenance-free performance. Compact design installs in-line easily.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/660-gtc1-3.jpg',
    badge: 'Fast Ship',
    brand: 'Sioux Chief',
    sku: '660-GTR1',
    stockStatus: 'In Stock',
    eta: 'Get 410 by Thu, May 21',
    highlights: [
      '3/8" OD Compression x 3/8" OD Female Tee',
      '304 stainless steel body',
      'Max pressure: 250 PSIG',
      'Max temperature: 250°F',
      'Piston-style, permanent pre-charge',
      'Lead-free, maintenance-free'
    ]
  },
  {
    id: 'plumb-6',
    name: '3/4" Full Port Lead Free Brass PEX Ball Valve',
    category: 'plumbing',
    price: 11.15,
    description:
      'Full-port lead-free brass ball valve with PEX barb connections for residential and commercial plumbing. Blow-out proof stem and PTFE seats ensure a drip-free seal over thousands of cycles. Meets NSF/ANSI 61 & 372 for potable water applications.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/ppbv075-3.jpg',
    badge: 'Trade Standard',
    brand: 'Apollo',
    sku: 'APXBV34',
    stockStatus: 'In Stock',
    eta: 'Get 320 by Thu, May 22',
    highlights: [
      '3/4" PEX Barb x 3/4" PEX Barb',
      'Full port for unrestricted flow',
      '400 PSI CWP rated',
      'Lead-free brass, NSF/ANSI 61 & 372',
      'Blow-out proof stem',
      'Rated 32°F to 200°F'
    ]
  },
  {
    id: 'plumb-7',
    name: 'PEX Crimp Ring Pack – 3/4" Copper, 100 pcs',
    category: 'plumbing',
    price: 18.75,
    description:
      'Bulk pack of 100 copper crimp rings for 3/4" PEX tubing connections. ASTM F1807 compliant and compatible with all standard PEX crimp tools. Ideal for new installations and retrofit jobs on residential water distribution systems.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/649x3-3.jpg',
    badge: 'Pro Pack',
    brand: 'Viega',
    sku: 'VG-CR34-100',
    stockStatus: 'In Stock',
    eta: 'Get 500 by Thu, May 22',
    highlights: [
      '100-piece bulk pack',
      '3/4" copper rings',
      'ASTM F1807 compliant',
      'Works with all crimp tools',
      'Fits schedule 40/80 PEX',
      'Residential water distribution'
    ]
  },
  {
    id: 'plumb-8',
    name: 'PVC Plastic Slip x Slip Check Valve Union',
    category: 'plumbing',
    price: 40.95,
    description:
      'Molded PVC swing-disc check valve for sump pump discharge lines. Prevents backflow when the pump cycles off. Union slip ends allow easy installation and removal without cutting pipe. Rated to 100 PSI.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/30-0021-3.jpg',
    badge: 'New',
    brand: 'Liberty Pumps',
    sku: 'CV-150',
    stockStatus: 'In Stock',
    eta: 'Get 215 by Thu, May 21',
    highlights: [
      '1-1/2" slip x slip PVC',
      'Swing-disc backflow prevention',
      'Union ends for easy removal',
      'Rated to 100 PSI',
      'For sump pump discharge lines',
      'Schedule 40 PVC body'
    ]
  },
  {
    id: 'plumb-9',
    name: 'Pressure Relief Valve – 3/4" MNPT, 150 PSI',
    category: 'plumbing',
    price: 29.50,
    description:
      'ASME-certified bronze safety relief valve for water heaters and pressure vessels. Factory set at 150 PSI. Lead-free construction meets all low-lead regulations. Required by code on every water heater installation.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/1041715-3.jpg',
    badge: 'New',
    brand: 'Watts',
    sku: 'WT-LF174A',
    stockStatus: 'In Stock',
    eta: 'Get 190 by Thu, May 22',
    highlights: [
      '3/4" MNPT connection',
      'Factory set at 150 PSI',
      'ASME & ANSI certified',
      'Lead-free bronze body',
      'For water heaters & vessels',
      'Required by code'
    ]
  },
  {
    id: 'plumb-10',
    name: '1/2 HP Sewage Pump System - 115v - 2" Discharge - 21" x 30" Basin w/ ALM-2 Standard Indoor Alarm',
    category: 'plumbing',
    price: 923,
    description:
      'The Liberty Pump Pro 370, P372LE51, is a 1/2 HP, 115v simplex submersible sewage pump system featuring the LE51 automatic sewage pump, which has two wide-angle piggyback mechanical floats. It also includes a 21" x 31" polyethylene tank with radial ribs for added strength and 4" molded no-hub type inlet to accept flexible coupling, schedule 80 PVC discharge pipe and polypropylene cover. This sewage pump system is ideal for handling liquid and solid waste up to 2" in diameter. The Liberty Pump Pro 370, P372LE51, is the most advanced residential sewage package available. It\'s equipped with the Quicktree system, allowing easy access and removal of switches without disturbing plumbing. The Liberty Pump Pro 370 has a large design that can hold up to 41 gallons. This allows for fewer cycles and longer pump life and it is perfect for difficult soil conditions.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/p372le51a2-3.jpg',
    badge: 'Quick Fix',
    brand: 'Charlotte Pipe',
    sku: 'CP-RC200',
    stockStatus: 'In Stock',
    eta: 'Get 400 by Thu, May 21',
    highlights: [
      '2" slip x slip',
      'Schedule 40 PVC',
      'No-stop repair design',
      'Solvent weld connection',
      'For DWV drain & vent systems',
      'Mid-pipe repair without extra cuts'
    ]
  },

  // ─── HVAC ────────────────────────────────────────────────────────────────────
  {
    id: 'hvac-1',
    name: 'T6 Pro Smart Wi-Fi Programmable Thermostat – 3H/2C',
    category: 'hvac',
    price: 198.77,
    description:
      'Smart Wi-Fi thermostat with geofencing technology that tracks your location and adjusts temperature automatically. Full control via the Resideo App from anywhere. Supports 3 Heat / 2 Cool heat pump or 2 Heat / 2 Cool conventional systems. Large touchscreen display with 7-day flexible scheduling.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/th6320wf2003honeywelhome01.jpg',
    badge: 'Top Rated',
    brand: 'Honeywell Home',
    sku: 'TH6320WF2003',
    stockStatus: 'In Stock',
    eta: 'Get 95 by Thu, May 21',
    highlights: [
      '3 Heat / 2 Cool heat pump support',
      'Wi-Fi with Resideo App control',
      'Geofencing & 7-day scheduling',
      'Large, easy-to-read touchscreen',
      'Dual fuel & ventilation control',
      '5-year manufacturer warranty'
    ]
  },
  {
    id: 'hvac-2',
    name: 'VCMA-20ULS Automatic Condensate Removal Pump',
    category: 'hvac',
    price: 53.40,
    description:
      'Automatic condensate removal pump for air conditioning, refrigeration, and dehumidification equipment. Features a 1/2-gallon leakproof ABS tank and stainless steel motor shaft. Built-in overflow safety switch shuts down the connected system if the reservoir fills unexpectedly.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/554425-3.jpg',
    badge: 'Service Ready',
    brand: 'Little Giant',
    sku: '554425',
    stockStatus: 'In Stock',
    eta: 'Get 130 by Thu, May 21',
    highlights: [
      '1/30 HP motor, 80 GPH at 1 ft head',
      '1/2 gallon ABS leakproof tank',
      'Safety overflow switch included',
      'Built-in check valve',
      '6 ft power cord',
      'Compact vertical installation'
    ]
  },
  {
    id: 'hvac-3',
    name: '1/4" & 3/8" x 50 ft Insulated Copper Mini-Split Line Set',
    category: 'hvac',
    price: 156.44,
    description:
      'Insulated copper line set for ductless mini-split air conditioning and heat pump systems. Includes 1/4" liquid line and 3/8" suction line with 1/2" insulation thickness. Pre-flared with brass nuts for direct connection — no flaring tools needed. Meets ASTM B280 standards.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/mueller-61230300001.jpg',
    badge: 'Install Ready',
    brand: 'Diversitech',
    sku: 'D143850',
    stockStatus: 'In Stock',
    eta: 'Get 80 by Thu, May 21',
    highlights: [
      '1/4" liquid + 3/8" suction line',
      '50 ft length',
      '1/2" insulation thickness',
      'Pre-flared brass nuts included',
      'Meets ASTM B280',
      'R-410A high-pressure rated'
    ]
  },
  {
    id: 'hvac-4',
    name: 'MERV-13 Pleated Air Filter – 20x25x1 (6-Pack)',
    category: 'hvac',
    price: 49.99,
    description:
      'High-efficiency MERV-13 pleated filters capture 90%+ of airborne particles including dust, pollen, mold spores, pet dander, and smoke. Six-pack value bundle for extended maintenance cycles. Replace every 60–90 days for optimal airflow and indoor air quality.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/fc313r2025honeywellhome01.jpg',
    badge: 'Value Pack',
    brand: 'Filtrete',
    sku: 'FT-M13-20251-6',
    stockStatus: 'In Stock',
    eta: 'Get 220 by Thu, May 22',
    highlights: [
      'MERV-13 efficiency rating',
      '20x25x1 filter size',
      '6-pack value bundle',
      'Captures smoke, pollen & dander',
      'Replace every 60–90 days',
      'Residential & light commercial'
    ]
  },
  {
    id: 'hvac-5',
    name: 'Dual-Run Capacitor – 45+5 MFD, 440V',
    category: 'hvac',
    price: 22.50,
    description:
      'Dual-run capacitor for AC compressors and condenser fan motors. 45+5 MFD rated at 440V with ±6% tolerance. Oval shape fits standard capacitor brackets in most residential outdoor condenser units. Direct replacement for major OEM brands.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/prcfd4575atitanhd001feb26.jpg',
    badge: 'Fast Ship',
    brand: 'Turbo 200',
    sku: 'T200-45-5-440',
    stockStatus: 'In Stock',
    eta: 'Get 310 by Thu, May 21',
    highlights: [
      '45+5 MFD ±6% tolerance',
      '440V rated',
      'Oval dual-run style',
      'Fits standard condenser brackets',
      'For AC compressor & fan motor',
      'Universal OEM replacement'
    ]
  },
  {
    id: 'hvac-6',
    name: 'Replacement Furnace Blower Motor – 1/3 HP, 115V, 4-Speed',
    category: 'hvac',
    price: 249.00,
    description:
      'PSC replacement blower motor for residential gas furnaces and air handlers. 4-speed taps allow airflow matching to system requirements. Thermally protected with sleeve bearings. Fits most standard squirrel-cage blower wheels in major OEM brands.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/6005-3.jpg',
    badge: 'Commercial',
    brand: 'Fasco',
    sku: 'FS-A170',
    stockStatus: 'In Stock',
    eta: 'Get 62 by Thu, May 22',
    highlights: [
      '1/3 HP, 115V PSC motor',
      '4-speed selectable taps',
      'Thermally protected',
      'Fits standard blower wheels',
      'For furnaces & air handlers',
      'OEM multi-brand compatible'
    ]
  },
  {
    id: 'hvac-7',
    name: 'Universal Furnace Control Board',
    category: 'hvac',
    price: 159.00,
    description:
      'Universal replacement control board compatible with most residential gas furnaces. Built-in LED diagnostic codes help technicians identify faults fast. Supports HSI (hot surface ignition) and integrates ignition control, blower timing, and safety lockout functions.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/icm2812-kit-3.jpg',
    badge: 'Service Part',
    brand: 'White-Rodgers',
    sku: 'WR-50A65-475',
    stockStatus: 'In Stock',
    eta: 'Get 45 by Thu, May 23',
    highlights: [
      'Universal multi-brand fit',
      'LED diagnostic fault codes',
      'HSI ignition compatible',
      '24V control circuit',
      'Integrated safety lockout',
      'Blower & ignition timing built-in'
    ]
  },
  {
    id: 'hvac-8',
    name: 'AC Condenser Contactor – 2-Pole, 30A, 24V Coil',
    category: 'hvac',
    price: 19.95,
    description:
      'Heavy-duty 2-pole contactor for AC condensers and heat pumps. Silver-alloy contacts resist pitting and arcing for extended service life. 24V coil and 30A rating. Direct replacement for Carrier, Trane, Lennox, and Rheem systems.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/tmx230a2-3.jpg',
    badge: 'Replacement',
    brand: 'Packard',
    sku: 'PK-C230B',
    stockStatus: 'In Stock',
    eta: 'Get 275 by Thu, May 22',
    highlights: [
      '2-pole, 30A rated',
      '24V control coil',
      'Silver-alloy arc-resistant contacts',
      'For Carrier, Trane, Lennox & Rheem',
      'For AC condensers & heat pumps',
      'Direct OEM replacement'
    ]
  },
  {
    id: 'hvac-9',
    name: 'ACR Copper Refrigerant Tubing – 1/4" OD, 50 ft Soft Coil',
    category: 'hvac',
    price: 89.90,
    description:
      'ACR-grade soft copper tubing for refrigeration and cooling system line routing. Cleaned, dehydrated, and factory-capped for immediate refrigerant service. Suitable for R-410A and R-22 systems. Bends easily without collapsing for routing around obstacles.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/mueller-d-04050.jpg',
    badge: 'Stock Up',
    brand: 'Mueller',
    sku: 'MU-ACR14-50',
    stockStatus: 'In Stock',
    eta: 'Get 55 by Thu, May 23',
    highlights: [
      '1/4" OD ACR-grade copper',
      '50 ft soft coil',
      'Cleaned, dehydrated & capped',
      'R-410A & R-22 compatible',
      'Flexible soft temper',
      'ASTM B280 standard'
    ]
  },
  {
    id: 'hvac-10',
    name: 'Steel Supply Air Register – 4" x 10", White',
    category: 'hvac',
    price: 12.75,
    description:
      'White powder-coat steel supply air register with adjustable 2-way deflection vanes for directing airflow. Removable louver frame for easy cleaning or painting. Fits standard 4" x 10" duct rough openings in residential and light commercial applications.',
    image: 'https://d3501hjdis3g5w.cloudfront.net/images/products/zoom/43108-3.jpg',
    badge: 'Everyday',
    brand: 'Hart & Cooley',
    sku: 'HC-RG410W',
    stockStatus: 'In Stock',
    eta: 'Get 400 by Thu, May 21',
    highlights: [
      '4" x 10" duct opening',
      '2-way adjustable deflection vanes',
      'White powder-coat steel finish',
      'Removable louver frame',
      'Residential & light commercial',
      'Screw-mount installation'
    ]
  }
];

export const featuredProducts = products.slice(0, 4);

export function getProductsByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}

export function getCategoryLabel(category: Category) {
  return categories.find((entry) => entry.key === category)?.label ?? category;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(category: Category, currentProductId: string) {
  return products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 5);
}
