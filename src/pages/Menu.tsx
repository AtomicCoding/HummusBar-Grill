import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Menu = () => {
  const menuData = {
    breakfast: [
      {
        name: "Shakshuka",
        description: "Eggs poached in spiced tomato sauce with peppers and herbs",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9ee7f179f29a40babee4581e1dbe7090?format=webp&width=800"
      },
      {
        name: "Pancakes",
        description: "Stacked pancakes topped with fresh cream and maple syrup",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F318420b311734c4d97286f652c36673d?format=webp&width=800"
      },
      {
        name: "Khachapuri",
        description: "Cheese-filled flatbread with za'atar spice blend on top",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fee96b803297d4a81ab38c2a8878b01fc?format=webp&width=800"
      },
      {
        name: "Avocado Toast",
        description: "Avocado, za'atar, chili flakes, sunny-side up egg (additional charge)",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F11ab52ee9bb74c7f98543f700384c066?format=webp&width=800"
      },
      {
        name: "Burekas Platter",
        description: "Flaky sesame burekas, hard-boiled egg, tahini, harissa, pickles",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbcd1442aeb90459fb2c1447d091b0ea0?format=webp&width=800"
      },
      {
        name: "Traditional Israeli Breakfast",
        description: "3 eggs any style served with chopped Israeli salad, assorted plates, and bread basket with jam and butter. Includes 1 hot beverage and 1 cold beverage.",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff31f3c717bd1474b9b964d640e05ffa8?format=webp&width=800"
      }
    ],
    appetizers: [
      {
        name: "Moroccan Cigars",
        description: "Spiced beef in crispy phyllo rolls",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb0abb88f484f4a26800507eee85c6c30?format=webp&width=800"
      },
      {
        name: "Focaccia Sabich",
        description: "Traditional sabich in focaccia bread with egg, eggplant, and tahini",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F846bb99ee99a4688bfb0ea7c7c36b98d?format=webp&width=800"
      },
      {
        name: "Falafel Plate",
        description: "Eight falafel balls served with tahini dipping sauce",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3ed201eccdb74e6688fe0cafa96d8949?format=webp&width=800"
      },
      {
        name: "Fried Cauliflower",
        description: "Crispy fried cauliflower with lemon and tahini",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F54f47b43a17849b29e52845c91582e65?format=webp&width=800"
      },
      {
        name: "Laffa Zatar",
        description: "Freshly baked laffa topped with olive oil and za'atar spice",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4816ceb177b14a5eaf6e2957338676d9?format=webp&width=800"
      },
      {
        name: "Barbarian Mushroom",
        description: "Mushroom and asparagus tossed with a bright, zesty lime sauce",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0b7c0caaee924d419a648dc8314b7941?format=webp&width=800"
      }
    ],
    lunchDinner: [
      {
        name: "Lamb Chops",
        description: "Grilled lamb chops, herb-marinated",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fae8b487dfba2438ca15a5f2888458e58?format=webp&width=800"
      },
      {
        name: "Grilled Branzino",
        description: "Whole branzino, chimichurri, lemon",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9414166ff15a49e58d5c579b133eeb0b?format=webp&width=800"
      },
      {
        name: "Mixed Chicken Skewers",
        description: "Breast, thigh, liver, and heart combination",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4be2a0615054461f8c01bda0d94bbe0a?format=webp&width=800"
      },
      {
        name: "Chicken Shawarma",
        description: "Spit-roasted and shaved chicken shawarma",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F42b8382e99ec489b80ee0823c39f1359?format=webp&width=800"
      },
      {
        name: "Mushroom Hummus",
        description: "Classic hummus topped with seasoned sautéed mushrooms",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F928512a1baea4684a41f4f560a517905?format=webp&width=800"
      },
      {
        name: "Mega Schnitzel",
        description: "Breaded crispy schnitzel with two sides of your choice",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F08269cdef40a40c2a4ac88b1144ee55f?format=webp&width=800"
      }
    ],
    drinks: [
      {
        name: "Iced Matcha",
        description: "Chilled Japanese green tea blended with milk and lightly sweetened, served over ice",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc9762011f5d147d0b998404e948e63a9?format=webp&width=800"
      },
      {
        name: "Aperol Spritz",
        description: "A light and bubbly mix of Aperol, Prosecco, and a splash of soda, served over ice with a slice of orange",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc5b06c22feed4c2b96a6e6763b2d926b?format=webp&width=800"
      },
      {
        name: "Malibu Sunset",
        description: "A tropical blend of Malibu rum, pineapple juice, and orange juice, served over ice with a splash of grenadine",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7f9cf299bf024416beaca54819e7fa86?format=webp&width=800"
      },
      {
        name: "Lemonana",
        description: "Frozen lemonade blended with fresh mint leaves",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2c00d0195a484562ba8f93aa7ae7a5ea?format=webp&width=800"
      },
      {
        name: "Cappuccino",
        description: "Espresso with velvety milk foam and heart latte art",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3e337c79f7b645d29e35881aa4a34974?format=webp&width=800"
      },
      {
        name: "Sangria",
        description: "A smooth blend of red wine, orange juice, and apple syrup, garnished with a cinnamon stick",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8c24610e24ca4a219fd6bf7b1430d47a?format=webp&width=800"
      }
    ],
    desserts: [
      {
        name: "Inside Out Baklava",
        description: "Flaky filo dough filled with walnuts, halva, dates, honey, and sweet syrup",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa1a8c95627674001bff3de435d7ab626?format=webp&width=800"
      },
      {
        name: "Bavarian Cream",
        description: "Flaky filo dough filled with walnuts, halva, dates, honey, and sweet syrup",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb596fbde004d4a4da8e1d1bc58a0bd42?format=webp&width=800"
      },
      {
        name: "Chocolate Mousse in a Jar",
        description: "Fresh chocolate mousse layered with cookie crumble and rich chocolate ganache",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc5575aaa05ea477b99a5722a059d8f95?format=webp&width=800"
      },
      {
        name: "Knafe Malabi",
        description: "Crispy knafe base, malabi custard, sweet syrup, pistachios",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F851ddc55f878493fa2129b48652a52bb?format=webp&width=800"
      },
      {
        name: "Classic Malabi",
        description: "Creamy rose-scented pudding with coconut and pistachio",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc0900a8d3b854aec857fdb63b6cb911b?format=webp&width=800"
      },
      {
        name: "Sfinge (Moroccan Donuts)",
        description: "Mini donuts dusted in sugar with dipping sauce on the side",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7dbfdfb641274edaa576a2c5f47c3356?format=webp&width=800"
      },
      {
        name: "Chocolate Soufflé",
        description: "A warm chocolate soufflé, served with a scoop of vanilla ice cream on the side",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6af7f1ef8ff4416b864d8f6c8e7140af?format=webp&width=800"
      },
      {
        name: "Pavlova",
        description: "A meringue cake topped with whipped cream and filled with a refreshing passion fruit sauce",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F340f43aef02942919e0b034aab09d9d2?format=webp&width=800"
      }
    ],
    kidsMenu: [
      {
        name: "Kids Chicken Nuggets",
        description: "Crispy golden chicken nuggets served with fries",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feb00405b88a34b27848fb34250c2fa20?format=webp&width=800"
      },
      {
        name: "Kids Beef Sliders",
        description: "Mini beef sliders served with fries",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa43b0afe6eea45e6baccb3810ad554f1?format=webp&width=800"
      },
      {
        name: "Kids Fried Chicken Sliders",
        description: "Chicken nugget sliders served with fries",
        image: "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F225620198c2e4df7a647430557d7c588?format=webp&width=800"
      }
    ]
  };

  const MenuItem = ({ item }: { item: { name: string; description: string; image: string } }) => (
    <div className="menu-card flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-4 mb-3 md:mb-4 w-full hover:shadow-md transition-shadow">
      <div className="flex flex-col justify-center max-w-[65%] md:max-w-[70%]">
        <h3 className="text-base md:text-lg font-semibold text-black mb-1">
          {item.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 md:w-25 md:h-25 lg:w-25 lg:h-25 rounded-xl object-cover ml-4 flex-shrink-0"
      />
    </div>
  );

  const MenuSection = ({ 
    title, 
    items, 
    showViewFullMenu = false 
  }: { 
    title: string; 
    items: Array<{ name: string; description: string; image: string }>; 
    showViewFullMenu?: boolean;
  }) => (
    <section className="mb-8 md:mb-12">
      <h2 className="text-2xl font-bold text-black mt-8 mb-4 pb-2 border-b border-gray-200 text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      {showViewFullMenu && (
        <div className="text-center mt-6">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
          >
            <a
              href="https://cdn.builder.io/o/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff01adf3a54e24c0e9d8e643af3834070?alt=media&token=57943a55-676b-4dcf-93a7-1e3f49e91351&apiKey=f273f29613d947e0adfbbfd1507382bb"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Menu
            </a>
          </Button>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        {/* Header with Hero Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0a0eda9784cc438c818cf02b2c391418?format=webp&width=800"
              alt="Mediterranean Food Menu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          </div>

          <div className="relative z-10 container-custom section-padding">
            <div className="max-w-3xl">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white font-medium mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Our
                <span className="block text-red-400">Menu</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Explore our complete collection of authentic Mediterranean
                dishes, crafted with traditional recipes and the finest
                ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container-custom section-padding max-w-6xl">
            <MenuSection title="BREAKFAST MENU" items={menuData.breakfast} />
            <MenuSection title="APPETIZERS" items={menuData.appetizers} />
            <MenuSection title="LUNCH & DINNER MENU" items={menuData.lunchDinner} showViewFullMenu={true} />
            <MenuSection title="DRINKS" items={menuData.drinks} />
            <MenuSection title="DESSERTS" items={menuData.desserts} />
            <MenuSection title="KIDS MENU" items={menuData.kidsMenu} />
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @media screen and (max-width: 768px) {
          .menu-card {
            padding: 12px;
            margin-bottom: 12px;
          }
          .menu-card h3 {
            font-size: 16px;
          }
          .menu-card p {
            font-size: 13px;
          }
          .menu-card img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
