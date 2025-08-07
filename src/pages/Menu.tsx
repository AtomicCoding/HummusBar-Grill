import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { MENU_SCHEMA, PAGE_KEYWORDS } from "@/lib/seo-data";

const Menu = () => {
  const menuData = {
    breakfast: [
      {
        name: "Shakshuka",
        description:
          "Eggs poached in spiced tomato sauce with peppers and herbs",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9ee7f179f29a40babee4581e1dbe7090?format=webp&width=800",
      },
      {
        name: "Pancakes",
        description: "Stacked pancakes topped with fresh cream and maple syrup",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F318420b311734c4d97286f652c36673d?format=webp&width=800",
      },
      {
        name: "Khachapuri",
        description: "Cheese-filled flatbread with za'atar spice blend on top",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fee96b803297d4a81ab38c2a8878b01fc?format=webp&width=800",
      },
      {
        name: "Avocado Toast",
        description:
          "Avocado, za'atar, chili flakes, sunny-side up egg (additional charge)",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F11ab52ee9bb74c7f98543f700384c066?format=webp&width=800",
      },
      {
        name: "Burekas Platter",
        description:
          "Flaky sesame burekas, hard-boiled egg, tahini, harissa, pickles",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbcd1442aeb90459fb2c1447d091b0ea0?format=webp&width=800",
      },
      {
        name: "Traditional Israeli Breakfast",
        description:
          "3 eggs any style served with chopped Israeli salad, assorted plates, and bread basket with jam and butter. Includes 1 hot beverage and 1 cold beverage.",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff31f3c717bd1474b9b964d640e05ffa8?format=webp&width=800",
      },
    ],
    appetizers: [
      {
        name: "Moroccan Cigars",
        description: "Spiced beef in crispy phyllo rolls",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb0abb88f484f4a26800507eee85c6c30?format=webp&width=800",
      },
      {
        name: "Focaccia Sabich",
        description:
          "Traditional sabich in focaccia bread with egg, eggplant, and tahini",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F846bb99ee99a4688bfb0ea7c7c36b98d?format=webp&width=800",
      },
      {
        name: "Falafel Plate",
        description: "Eight falafel balls served with tahini dipping sauce",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3ed201eccdb74e6688fe0cafa96d8949?format=webp&width=800",
      },
      {
        name: "Fried Cauliflower",
        description: "Crispy fried cauliflower with lemon and tahini",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F54f47b43a17849b29e52845c91582e65?format=webp&width=800",
      },
      {
        name: "Laffa Zatar",
        description:
          "Freshly baked laffa topped with olive oil and za'atar spice",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4816ceb177b14a5eaf6e2957338676d9?format=webp&width=800",
      },
      {
        name: "Barbarian Mushroom",
        description:
          "Mushroom and asparagus tossed with a bright, zesty lime sauce",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0b7c0caaee924d419a648dc8314b7941?format=webp&width=800",
      },
    ],
    lunchDinner: [
      {
        name: "Lamb Chops",
        description: "Grilled lamb chops, herb-marinated",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fae8b487dfba2438ca15a5f2888458e58?format=webp&width=800",
      },
      {
        name: "Grilled Branzino",
        description: "Whole branzino, chimichurri, lemon",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9414166ff15a49e58d5c579b133eeb0b?format=webp&width=800",
      },
      {
        name: "Lamb Skewer",
        description:
          "Comes with either one or two skewers and two sides of your choice",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa4715c7b4e3a48369c446b7597f942b0?format=webp&width=800",
      },
      {
        name: "Chicken Shawarma",
        description: "Spit-roasted and shaved chicken shawarma",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F42b8382e99ec489b80ee0823c39f1359?format=webp&width=800",
      },
      {
        name: "Mushroom Hummus",
        description: "Classic hummus topped with seasoned sautéed mushrooms",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F928512a1baea4684a41f4f560a517905?format=webp&width=800",
      },
      {
        name: "Mega Schnitzel",
        description: "Breaded crispy schnitzel with two sides of your choice",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F08269cdef40a40c2a4ac88b1144ee55f?format=webp&width=800",
      },
    ],
    drinks: [
      {
        name: "Iced Matcha",
        description:
          "Chilled Japanese green tea blended with milk and lightly sweetened, served over ice",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc9762011f5d147d0b998404e948e63a9?format=webp&width=800",
      },
      {
        name: "Aperol Spritz",
        description:
          "A light and bubbly mix of Aperol, Prosecco, and a splash of soda, served over ice with a slice of orange",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc5b06c22feed4c2b96a6e6763b2d926b?format=webp&width=800",
      },
      {
        name: "Malibu Sunset",
        description:
          "A tropical blend of Malibu rum, pineapple juice, and orange juice, served over ice with a splash of grenadine",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7f9cf299bf024416beaca54819e7fa86?format=webp&width=800",
      },
      {
        name: "Lemonana",
        description: "Frozen lemonade blended with fresh mint leaves",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2c00d0195a484562ba8f93aa7ae7a5ea?format=webp&width=800",
      },
      {
        name: "Cappuccino",
        description: "Espresso with velvety milk foam and heart latte art",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3e337c79f7b645d29e35881aa4a34974?format=webp&width=800",
      },
      {
        name: "Sangria",
        description:
          "A smooth blend of red wine, orange juice, and apple syrup, garnished with a cinnamon stick",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8c24610e24ca4a219fd6bf7b1430d47a?format=webp&width=800",
      },
    ],
    desserts: [
      {
        name: "Inside Out Baklava",
        description:
          "Flaky filo dough filled with walnuts, halva, dates, honey, and sweet syrup",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa1a8c95627674001bff3de435d7ab626?format=webp&width=800",
      },
      {
        name: "Bavarian Cream",
        description:
          "Flaky filo dough filled with walnuts, halva, dates, honey, and sweet syrup",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb596fbde004d4a4da8e1d1bc58a0bd42?format=webp&width=800",
      },
      {
        name: "Chocolate Mousse in a Jar",
        description:
          "Fresh chocolate mousse layered with cookie crumble and rich chocolate ganache",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc5575aaa05ea477b99a5722a059d8f95?format=webp&width=800",
      },
      {
        name: "Knafe Malabi",
        description:
          "Crispy knafe base, malabi custard, sweet syrup, pistachios",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F851ddc55f878493fa2129b48652a52bb?format=webp&width=800",
      },
      {
        name: "Classic Malabi",
        description: "Creamy rose-scented pudding with coconut and pistachio",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc0900a8d3b854aec857fdb63b6cb911b?format=webp&width=800",
      },
      {
        name: "Sfinge (Moroccan Donuts)",
        description:
          "Mini donuts dusted in sugar with dipping sauce on the side",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7dbfdfb641274edaa576a2c5f47c3356?format=webp&width=800",
      },
      {
        name: "Chocolate Soufflé",
        description:
          "A warm chocolate soufflé, served with a scoop of vanilla ice cream on the side",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6af7f1ef8ff4416b864d8f6c8e7140af?format=webp&width=800",
      },
      {
        name: "Pavlova",
        description:
          "A meringue cake topped with whipped cream and filled with a refreshing passion fruit sauce",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F340f43aef02942919e0b034aab09d9d2?format=webp&width=800",
      },
    ],
    kidsMenu: [
      {
        name: "Kids Chicken Nuggets",
        description: "Crispy golden chicken nuggets served with fries",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feb00405b88a34b27848fb34250c2fa20?format=webp&width=800",
      },
      {
        name: "Kids Beef Sliders",
        description: "Mini beef sliders served with fries",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa43b0afe6eea45e6baccb3810ad554f1?format=webp&width=800",
      },
      {
        name: "Kids Fried Chicken Sliders",
        description: "Chicken nugget sliders served with fries",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F225620198c2e4df7a647430557d7c588?format=webp&width=800",
      },
    ],
  };

  const MenuItem = ({
    item,
  }: {
    item: { name: string; description: string; image: string };
  }) => (
    <div className="menu-card flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow">
      <div className="flex flex-col justify-center">
        <h3 className="font-semibold text-black">{item.name}</h3>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
      <img
        src={item.image}
        alt={item.name}
        className="rounded-xl object-cover ml-4 flex-shrink-0"
      />
    </div>
  );

  const MenuSection = ({
    title,
    items,
    buttonText,
    pdfLink,
    showButton = false,
    id,
  }: {
    title: string;
    items: Array<{ name: string; description: string; image: string }>;
    buttonText?: string;
    pdfLink?: string;
    showButton?: boolean;
    id?: string;
  }) => (
    <section id={id} className="mb-6 md:mb-8">
      <h2 className="menu-section-title text-2xl font-bold text-black mt-6 mb-3 pb-2 border-b border-gray-200 text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      {showButton && buttonText && pdfLink && (
        <div className="text-center mt-6">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl transition-all"
          >
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </a>
          </Button>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-black">
      <SEOHead
        title="Mediterranean Food Menu - Hummus Bar & Grill Los Angeles | Authentic Middle Eastern Cuisine"
        description="Explore our authentic Mediterranean menu featuring fresh hummus varieties, grilled lamb chops, chicken shawarma, Israeli breakfast, falafel, and traditional Middle Eastern desserts in Los Angeles."
        keywords={PAGE_KEYWORDS.menu}
        canonicalUrl="https://hummusbarandgrill.com/menu"
        structuredData={MENU_SCHEMA}
      />
      <Navigation />
      <main>
        {/* Header with Hero Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0a0eda9784cc438c818cf02b2c391418?format=webp&width=800"
              alt="Authentic Mediterranean food menu at Hummus Bar & Grill Los Angeles featuring Middle Eastern specialties"
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
            <MenuSection
              id="breakfast-section"
              title="BREAKFAST MENU"
              items={menuData.breakfast}
              buttonText="View Full Breakfast Menu"
              pdfLink="/pdfs/hummus-bar-breakfast-menu.pdf"
              showButton={true}
            />
            <MenuSection
              id="appetizers-section"
              title="APPETIZERS"
              items={menuData.appetizers}
            />
            <MenuSection
              id="lunch-dinner-section"
              title="LUNCH & DINNER MENU"
              items={menuData.lunchDinner}
              buttonText="View Full Lunch & Dinner Menu"
              pdfLink="https://cdn.builder.io/o/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff01adf3a54e24c0e9d8e643af3834070?alt=media&token=57943a55-676b-4dcf-93a7-1e3f49e91351&apiKey=f273f29613d947e0adfbbfd1507382bb"
              showButton={true}
            />
            <MenuSection
              id="drinks-section"
              title="DRINKS"
              items={menuData.drinks}
              buttonText="View Full Drinks Menu"
              pdfLink="https://cdn.builder.io/api/v1/image/assets%2Fad5fa173f30f42cb936245efbd928c96%2F1a2df841e8a24b298027f67974b1cedd?format=webp&width=800"
              showButton={true}
            />
            <MenuSection
              id="desserts-section"
              title="DESSERTS"
              items={menuData.desserts}
            />
            <MenuSection
              id="kids-menu-section"
              title="KIDS MENU"
              items={menuData.kidsMenu}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
