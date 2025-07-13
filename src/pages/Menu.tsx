import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Menu = () => {
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

        {/* SECTION 1: BREAKFAST MENU */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <h2 className="text-4xl lg:text-5xl font-bold text-center uppercase mb-16 text-yellow-400">
              BREAKFAST MENU
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
              {/* Butter Pancakes */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fed447ea944274105ba1f1238db556036?format=webp&width=800"
                    alt="Butter Pancakes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Butter Pancakes
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Stacked pancakes topped with fresh cream and maple syrup
                </p>
              </div>

              {/* Khachapuri */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fee96b803297d4a81ab38c2a8878b01fc?format=webp&width=800"
                    alt="Khachapuri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Khachapuri
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cheese-filled flatbread with za'atar spice blend on top
                </p>
              </div>

              {/* Avocado Toast */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F11ab52ee9bb74c7f98543f700384c066?format=webp&width=800"
                    alt="Avocado Toast"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Avocado Toast
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Avocado, za'atar, chili flakes, sunny-side up egg (additional
                  charge)
                </p>
              </div>

              {/* Burekas Platter */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbcd1442aeb90459fb2c1447d091b0ea0?format=webp&width=800"
                    alt="Burekas Platter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Burekas Platter
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Flaky sesame burekas, hard-boiled egg, tahini, harissa,
                  pickles
                </p>
              </div>

              {/* Royal Breakfast */}
              <div className="text-center lg:col-start-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff31f3c717bd1474b9b964d640e05ffa8?format=webp&width=800"
                    alt="Royal Breakfast"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Royal Breakfast
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eggs any style, 1 cold drink, 1 hot drink, Jerusalem bagel,
                  jam, labneh, tuna, olive tapenade, cottage cheese, babaganoush
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Menu
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2: APPETIZERS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-yellow-400 uppercase mb-16">
              APPETIZERS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {/* Moroccan Cigars */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb0abb88f484f4a26800507eee85c6c30?format=webp&width=800"
                    alt="Moroccan Cigars"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Moroccan Cigars
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Spiced beef in crispy phyllo rolls
                </p>
              </div>

              {/* Kubeh */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2df0587948774b8594b82f0dc3b9c598?format=webp&width=800"
                    alt="Kubeh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Kubeh</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Beef and semolina dumplings in broth
                </p>
              </div>

              {/* Falafel Plate */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3ed201eccdb74e6688fe0cafa96d8949?format=webp&width=800"
                    alt="Falafel Plate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Falafel Plate
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eight falafel balls served with tahini dipping sauce
                </p>
              </div>

              {/* Fried Cauliflower */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F54f47b43a17849b29e52845c91582e65?format=webp&width=800"
                    alt="Fried Cauliflower"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Fried Cauliflower
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Crispy fried cauliflower with lemon and tahini
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LUNCH & DINNER MENU */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <h2 className="text-4xl lg:text-5xl font-bold text-center uppercase mb-16">
              <span className="text-white">LUNCH & </span>
              <span className="text-red-600">DINNER</span>
              <span className="text-white"> MENU</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
              {/* Lamb Chops */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fae8b487dfba2438ca15a5f2888458e58?format=webp&width=800"
                    alt="Lamb Chops"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Lamb Chops
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Grilled lamb chops, herb-marinated
                </p>
              </div>

              {/* Grilled Branzino */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9414166ff15a49e58d5c579b133eeb0b?format=webp&width=800"
                    alt="Grilled Branzino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Grilled Branzino
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Whole branzino, chimichurri, lemon
                </p>
              </div>

              {/* Mixed Chicken Skewers */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4be2a0615054461f8c01bda0d94bbe0a?format=webp&width=800"
                    alt="Mixed Chicken Skewers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Mixed Chicken Skewers
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Breast, thigh, liver, and heart combination
                </p>
              </div>

              {/* Chicken Shawarma */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F42b8382e99ec489b80ee0823c39f1359?format=webp&width=800"
                    alt="Chicken Shawarma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Chicken Shawarma
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Spit-roasted and shaved chicken shawarma
                </p>
              </div>

              {/* Mushroom Hummus */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F928512a1baea4684a41f4f560a517905?format=webp&width=800"
                    alt="Mushroom Hummus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Mushroom Hummus
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Classic hummus topped with seasoned sautéed mushrooms
                </p>
              </div>

              {/* Mega Schnitzel Plate */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4af304b196e245019129930933b0400b?format=webp&width=800"
                    alt="Mega Schnitzel Plate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Mega Schnitzel Plate
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Breaded crispy schnitzel with any two side options of your
                  choice (not just the fries and salad shown)
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Menu
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4: DRINKS */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-blue-400 uppercase mb-16">
              DRINKS
            </h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
              {/* Strawberry Iced Matcha */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9203c5faec45446981d85b60a97af384?format=webp&width=800"
                    alt="Strawberry Iced Matcha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Strawberry Iced Matcha
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Iced matcha latte with fresh strawberry puree at the base
                </p>
              </div>

              {/* Lemonana */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2c00d0195a484562ba8f93aa7ae7a5ea?format=webp&width=800"
                    alt="Lemonana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lemonana</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Frozen lemonade blended with fresh mint leaves
                </p>
              </div>

              {/* Cappuccino */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3e337c79f7b645d29e35881aa4a34974?format=webp&width=800"
                    alt="Cappuccino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Cappuccino
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Espresso with velvety milk foam and heart latte art
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Menu
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5: DESSERTS */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-red-600 uppercase mb-16">
              DESSERTS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-16">
              {/* Bavarian Cream with Chocolate */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb596fbde004d4a4da8e1d1bc58a0bd42?format=webp&width=800"
                    alt="Bavarian Cream with Chocolate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Bavarian Cream with Chocolate
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Vanilla cream topped with bread crumbs and chocolate syrup
                  drizzle
                </p>
              </div>

              {/* Knafe Malabi */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F851ddc55f878493fa2129b48652a52bb?format=webp&width=800"
                    alt="Knafe Malabi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Knafe Malabi
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Crispy knafe base, malabi custard, sweet syrup, pistachios
                </p>
              </div>

              {/* Classic Malabi */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc0900a8d3b854aec857fdb63b6cb911b?format=webp&width=800"
                    alt="Classic Malabi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Classic Malabi
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Creamy rose-scented pudding with coconut and pistachio
                </p>
              </div>

              {/* Sfinge (Moroccan Donuts) */}
              <div className="text-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7dbfdfb641274edaa576a2c5f47c3356?format=webp&width=800"
                    alt="Sfinge (Moroccan Donuts)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Sfinge (Moroccan Donuts)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mini donuts dusted in sugar with dipping sauce on the side
                </p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Menu
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
