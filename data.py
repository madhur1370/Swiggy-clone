import random
from pymongo import MongoClient

# Connect to the local MongoDB instance
client = MongoClient('mongodb://localhost:27017/')

# Access a specific database (replace 'restaurantDB' with your database name)
db = client['Sizzle']
collection=db["restaurant"]


# Predefined locations
locations = ["Jaipur", "Delhi", "Mumbai"]

# Predefined list of restaurant and menu names to randomize
restaurant_names = [
    "Mahapadam", "Blueberry Cafe", "Royal Kitchen", "Spicy Bite", 
    "Taste Paradise", "The Food Court", "Urban Tandoor", "The Grill House",
    "Pasta Street", "Burger Hub", "The Spice Route", "Ocean Breeze", 
    "Mint Leaves", "Crispy Crust", "Tandoori Flames", "The BBQ Station",
    "Taste Town", "Street Bites", "Fusion Flavours", "Desi Delight"
]

menu_items = [
    "Burger", "Pizza", "Pasta", "Sandwich", "Salad", "Fries", "Tacos", 
    "Nachos", "Hotdog", "Chicken Wings", "BBQ Ribs", "Steak", "Sushi", 
    "Momos", "Burrito", "noodles", "Ice Cream", "Pancakes", 
    "Brownie", "Donut"
]

# Predefined image URLs for variety
image_urls = [
    "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/6004198/pexels-photo-6004198.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/27645103/pexels-photo-27645103/free-photo-of-wild-wings-wings-photography.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/27643010/pexels-photo-27643010/free-photo-of-two-steaks-are-being-cooked-on-a-grill.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/4686958/pexels-photo-4686958.jpeg?auto=compress&cs=tinysrgb&w=300"
]

res_image=[
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1378424/pexels-photo-1378424.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1560657/pexels-photo-1560657.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/601169/pexels-photo-601169.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1438445/pexels-photo-1438445.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1833320/pexels-photo-1833320.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1546360/pexels-photo-1546360.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1579715/pexels-photo-1579715.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/5865147/pexels-photo-5865147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2894275/pexels-photo-2894275.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2067560/pexels-photo-2067560.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2079453/pexels-photo-2079453.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2574489/pexels-photo-2574489.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/2612334/pexels-photo-2612334.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1616016/pexels-photo-1616016.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/425240/pexels-photo-425240.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/276681/pexels-photo-276681.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/27274955/pexels-photo-27274955/free-photo-of-a-restaurant-with-tables-and-chairs-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/27305248/pexels-photo-27305248/free-photo-of-the-dining-room-at-the-restaurant-is-set-up-with-wooden-tables-and-chairs.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/27294702/pexels-photo-27294702/free-photo-of-a-restaurant-with-tables-and-chairs-and-shelves.jpeg?auto=compress&cs=tinysrgb&w=300"
]

def r():
    return random.randint(0,len(res_image)-1)

# Function to create random ratings for restaurants and dishes
def generate_ratings():
    return [random.randint(0, 50) for _ in range(5)]

# Function to generate menu for each restaurant
def generate_menu():
    menu = []
    for i in range(20):  # 20 menu items
        menu.append({
            "dish_name": menu_items[i],
            "price": random.randint(50, 300),
            "rating": generate_ratings(),
            "image": image_urls[i]
        })
    return menu

# Function to generate restaurants for each location
def generate_restaurants():
    restaurants = []
    for i in range(20):  # 20 restaurants per location
        restaurants.append({
            "res_id": i + 1,
            "res_name": restaurant_names[i],
            "avg_rating": random.uniform(3.0, 5.0),
            "ratings": generate_ratings(),
            "address": f"Street {random.randint(1, 100)}, Area {random.randint(1, 20)}",
            "pincode": random.randint(100000, 999999),
            "menu": generate_menu(),
            "res_image":[res_image[r()] for i in range(0,5)]
        })
    return restaurants

# Function to generate the full dataset for all locations
def generate_dataset():
    for location in locations:
        collection.insert_one({
            "location": location,
            "restaurants": generate_restaurants()
        })

generate_dataset()


