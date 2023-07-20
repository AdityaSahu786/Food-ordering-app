import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Welcome to CheesyBites Pizzeria, where we bring you the joy of pizza one slice at a time! Our passion for pizza is so strong that we'd put pineapple on everything if we could (but don't worry, we won't!). At CheesyBites, we believe in the power of a perfectly baked crust, ooey-gooey cheese, and toppings that'll make your taste buds do the happy dance. Join us for a pizza experience that's so good, it'll make you say, "Mamma Mia!" 😉

                    At CheesyBites, we're more than just a pizza joint; we're a pizza party waiting to happen! Our journey began with a group of pizza enthusiasts who dreamed of creating a haven for all pizza lovers out there. Our secret recipe sauce and premium, handpicked ingredients are what set our pizzas apart from the rest. We believe that life is too short for mediocre pizza, which is why we strive to deliver the most extraordinary, mouthwatering, and downright delicious pizzas you've ever tasted.

Our team of pizzaiolos is on a mission to make you smile with every bite. From classic favorites to unique specialty pies, there's something for every pizza connoisseur on our menu. Plus, we've got options for veggie lovers, meat enthusiasts, and even those who prefer gluten-free crusts – because everyone deserves to enjoy a slice of heaven.

But it's not just about the pizza; it's about the experience. We've created a warm, inviting atmosphere where families, friends, and pizza aficionados can come together to share laughter, stories, and of course, a great pizza party! So, bring your appetite and your sense of humor because at CheesyBites, we believe in two things: life's too short to eat bad pizza, and there's no problem that a pizza and a good laugh can't solve!

Join us at CheesyBites Pizzeria, and let's make your taste buds sing, your belly dance, and your heart full of pizza love! 🍕❤️

Feel free to tweak and customize the content to fit your restaurant's personality and vibe. Best of luck with your pizza joint! 🍕😄            
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}