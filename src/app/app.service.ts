import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {

products = signal<any[]>([
  {
    id: 1,
    name: 'Logitech G213 Prodigy',
    price: 329,
    description: 'Gamingowa klawiatura membranowa z podświetleniem LIGHTSYNC RGB, odpornymi na zalanie klawiszami Mech-Dome oraz podpórką pod nadgarstki.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVQidKc6un9fG_Yw_ziSZSk86RdsN9Xw9pdnDi3agSQ&s=10'
  },
  {
    id: 2,
    name: 'Logitech G502 HERO',
    price: 149,
    description: 'Przewodowa mysz gamingowa z sensorem HERO 25K, regulowanym DPI do 25600, podświetleniem LIGHTSYNC RGB i regulowanymi ciężarkami.',
    image: 'https://www.logitechg.com/content/dam/gaming/en/non-braid/hyjal-g502-hero/2025/g502-hero-mouse-top-angle-gallery-1.png'
  },
  {
    id: 3,
    name: 'AOC 24G2SP',
    price: 899,
    description: '23,8-calowy monitor gamingowy z matrycą IPS Full HD, odświeżaniem 165 Hz i czasem reakcji 1 ms MPRT.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSPHDD3yuM75hMxpWzgBiFD1w7btBWRDwUdhukFs7aQ&s=10'
  },
  {
    id: 4,
    name: 'HyperX Cloud III',
    price: 299,
    description: 'Gamingowy zestaw słuchawkowy z 53-milimetrowymi przetwornikami, przestrzennym dźwiękiem DTS Headphone:X i odłączanym mikrofonem.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNofsfzVhEbXQb4j6-WjqZSTw1oacgJNkGop60ELDwpw&s=10'
  },
  {
    id: 5,
    name: 'Logitech G Pro X Superlight 2',
    price: 549,
    description: 'Lekka bezprzewodowa mysz gamingowa z sensorem HERO 2, wysoką precyzją śledzenia i przełącznikami LIGHTFORCE.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4aRhOWQoolHgrpOn6n-Gz-OsNquYOO87Qtpqtf-BGg&s=10'
  },
  {
    id: 6,
    name: 'Logitech G915 TKL',
    price: 699,
    description: 'Niskoprofilowa bezprzewodowa klawiatura gamingowa z przełącznikami GL, podświetleniem RGB LIGHTSYNC i konstrukcją TKL.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2yJzX9sMnnZuKDdLenU4ORP6bPPXfBVxXY3vjlp_eg&s=10'
  },
  {
    id: 7,
    name: 'Razer DeathAdder V3',
    price: 349,
    description: 'Ergonomiczna przewodowa mysz gamingowa wyposażona w precyzyjny sensor optyczny i lekką konstrukcję.',
    image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/2/pr_2023_2_24_7_53_55_434_00.jpg'
  },
  {
    id: 8,
    name: 'Razer BlackWidow V3',
    price: 499,
    description: 'Mechaniczna klawiatura gamingowa z przełącznikami Razer Green, podświetleniem Razer Chroma RGB oraz pełnym układem klawiszy.',
    image: 'https://m.media-amazon.com/images/I/71mRyS4-RTL.jpg'
  },
  {
    id: 9,
    name: 'Samsung Odyssey G5 27"',
    price: 1099,
    description: 'Zakrzywiony monitor gamingowy 27 cali z rozdzielczością QHD, wysoką częstotliwością odświeżania i technologią FreeSync.',
    image: 'https://image.ceneostatic.pl/data/products/162717428/f-samsung-27-odyssey-g5-ls27cg552euxen.jpg'
  },
  {
    id: 10,
    name: 'ASUS TUF Gaming VG27AQ',
    price: 1399,
    description: '27-calowy monitor gamingowy QHD z matrycą IPS, odświeżaniem 165 Hz oraz obsługą Adaptive-Sync.',
    image: 'https://dlcdnwebimgs.asus.com/gain/6a7f65b7-706a-402e-8b55-a6a2354e0950/w692'
  },
  {
    id: 11,
    name: 'Kingston Fury Beast 16GB DDR4',
    price: 169,
    description: 'Moduł pamięci RAM DDR4 o pojemności 16 GB przeznaczony do komputerów stacjonarnych i wymagających zastosowań.',
    image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg'
  },
  {
    id: 12,
    name: 'Samsung 980 PRO 1TB',
    price: 399,
    description: 'Wydajny dysk SSD NVMe PCIe 4.0 o pojemności 1 TB, przeznaczony do komputerów gamingowych i stacji roboczych.',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/pl/mz-v8p1t0bw/gallery/pl-980-pro-pcie-40-nvme-m2-ssd-mz-v8p1t0bw-530975103'
  },
  {
    id: 13,
    name: 'WD Black SN850X 1TB',
    price: 429,
    description: 'Gamingowy dysk SSD NVMe PCIe 4.0 o pojemności 1 TB zapewniający bardzo wysoką wydajność podczas uruchamiania gier i aplikacji.',
    image: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn850x-nvme-ssd/gallery/wd-black-sn850x-nvme-ssd-front.png'
  },
  {
    id: 14,
    name: 'AMD Ryzen 5 7600',
    price: 799,
    description: 'Sześciordzeniowy procesor AMD Ryzen 7000 z 12 wątkami, przeznaczony do komputerów gamingowych i uniwersalnych.',
    image: 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505504-amd-ryzen-5-7600-processor.jpg'
  },
  {
    id: 15,
    name: 'Intel Core i5-14600K',
    price: 1199,
    description: 'Wydajny procesor Intel Core 14. generacji przeznaczony dla komputerów gamingowych, stacji roboczych i wymagających aplikacji.',
    image: 'https://m.media-amazon.com/images/I/51mZJ7J7mVL._AC_SL1500_.jpg'
  },
  {
    id: 16,
    name: 'NVIDIA GeForce RTX 4060',
    price: 1399,
    description: 'Karta graficzna GeForce RTX 4060 przeznaczona do grania w rozdzielczości Full HD i obsługująca technologie NVIDIA DLSS oraz ray tracing.',
    image: 'https://images.nvidia.com/aem-dam/Solutions/geforce/ada/rtx-4060/geforce-rtx-4060-product-gallery-1.png'
  },
  {
    id: 17,
    name: 'AMD Radeon RX 7600',
    price: 1299,
    description: 'Karta graficzna AMD Radeon przeznaczona do grania w Full HD, wyposażona w 8 GB pamięci GDDR6.',
    image: 'https://www.amd.com/content/dam/amd/en/images/products/graphics/radeon-rx/6000/2505000-amd-radeon-rx-7600-graphics-card.jpg'
  },
  {
    id: 18,
    name: 'Corsair RM750e',
    price: 499,
    description: 'Modularny zasilacz komputerowy o mocy 750 W z certyfikatem 80 PLUS Gold i nowoczesnym okablowaniem.',
    image: 'https://assets.corsair.com/image/upload/c_pad,q_auto,w_800/products/PSUs/CP-9020262-NA/Gallery/RMe_2023_750W_01.png'
  },
  {
    id: 19,
    name: 'Fractal Design Pop Air',
    price: 349,
    description: 'Przewiewna obudowa ATX z charakterystycznym przednim panelem mesh, miejscem na duże karty graficzne i wydajnym systemem wentylacji.',
    image: 'https://www.fractal-design.com/app/uploads/2022/06/Pop-Air-Black-TG-Clear-01.png'
  },
  {
    id: 20,
    name: 'Elgato Stream Deck MK.2',
    price: 599,
    description: 'Panel sterujący wyposażony w 15 konfigurowalnych przycisków LCD, przeznaczony dla streamerów, twórców i użytkowników PC.',
    image: 'https://assets.elgato.com/media/asset/2c3a9e1d-4f4b-4f8c-9b7d-8a5e5f1c2d3e/image.png'
  }
]);



  cartItems = signal<any[]>([]);
  cartLength = computed(() => this.cartItems().length);
  
  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => {
      const product = this.products().find(p => p.id === item.id);
      return sum + (product?.price ?? 0) * item.pieces;
    }, 0)
  );

  add(product: any) {
    this.cartItems.update(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        return items.map(i =>
          i.id === product.id ? { ...i, pieces: i.pieces + 1 } : i
        );
      }
      return [...items, { id: product.id, pieces: 1 }];
    });
  }

  remove(item: any) {
    this.cartItems.update(items => items.filter(i => i.id !== item.id));
  }
}