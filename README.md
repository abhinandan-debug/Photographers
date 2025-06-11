#Photographers Page
🎯 Objective
This project aims to build a dynamic web application featuring a Category Listing Page for photographers and a dedicated Photographer Profile Page. It serves as a practical demonstration of UI development, API fetching, client-side state management, advanced filtering, searching, and logic implementation in a modern web environment.

✨ Features
The application is divided into two main parts, each with distinct functionalities:

Part 1: Category Listing Page
This page provides a comprehensive overview of photographers, allowing users to discover and filter based on various criteria.

Photographer Cards (Grid View)
Each photographer is represented by an interactive card displaying essential information:

Photographer Name
Profile Picture
Location
Starting Price
Rating
Tags: (e.g., "Candid", "Outdoor", "Traditional", "Studio")
"View Profile" Button: Navigates to the individual photographer's profile page.
Advanced Filters (Sidebar or Drawer)
A robust filtering mechanism to refine search results dynamically:

Price Range Slider: Filter photographers by their starting price range.
Ratings: Select photographers with a minimum rating (e.g., 4+, 3+).
Styles (Checkboxes): Filter by photography styles such as Traditional, Candid, Studio, Outdoor, etc.
City Dropdown: Select photographers from specific cities (e.g., "Bengaluru").
Sorting Options:
Price: Low to High
Rating: High to Low
Recently Added: (Simulated using a unique ID or timestamp)
Filters update the displayed results instantly without a full page reload.
Search Bar (Top)
A prominent search bar enabling users to find photographers:

Supports searching by photographer name, location, or tags.
Implements a fuzzy search behavior for more flexible results.
Pagination or Infinite Scroll
Efficiently loads and displays a large number of photographers:

Part 2: Photographer Profile Page
Accessed by clicking "View Profile" from the listing page, this dedicated page offers an in-depth look at a single photographer.

Name & Bio: A comprehensive introduction to the photographer.
Styles & Tags: Reiteration of their photography specializations.
Price: Displays their starting price details.
Full Gallery: A visually appealing display of their work, implemented as a carousel or grid.
Reviews: A section showcasing client feedback, including:
Reviewer Name
Rating
Comment
Date of Review
“Send Inquiry” Button: Triggers a modal or popup form for users to send a direct inquiry to the photographer.
🚀 Technologies Used
HTML: Structuring the content and layout of all pages.
CSS: Styling the application for a modern, responsive, and visually appealing user interface.
JavaScript : Powering all dynamic functionalities, including API fetching, state management, filtering logic, search, pagination, and modal interactions.
Mock API (JSON Server): Used to create a simulated REST API, providing a flexible and realistic data source for development without requiring a full backend.
⚙️ Installation
To set up and run this project locally, you will need Node.js and npm (Node Package Manager) installed on your system.

Clone the repository:

Bash

git clone https://github.com/abhinandan-debug/Photographers.git
Navigate into the project directory:

Bash

cd Photographers
Install JSON Server:
If you don't have JSON Server globally installed, install it:

Bash

npm install -g json-server
Prepare your Mock API Data:
Create a db.json file in your project's root directory (or a designated api folder) with your mock data structure for photographers and reviews.

Example db.json structure:
JSON

{
  "photographers": [
    {
      "id": "1",
      "name": "Jane Doe",
      "profilePicture": "https://placehold.co/150x150/FFF/000?text=Jane",
      "location": "Bengaluru",
      "startingPrice": 25000,
      "rating": 4.8,
      "tags": ["Candid", "Outdoor", "Maternity"],
      "bio": "Experienced maternity photographer...",
      "styles": ["Traditional", "Candid"],
      "gallery": [
        "https://placehold.co/600x400/FF0000/FFFFFF?text=Gallery+1",
        "https://placehold.co/600x400/00FF00/FFFFFF?text=Gallery+2"
      ],
      "reviews": [
        {
          "reviewer": "Client A",
          "rating": 5,
          "comment": "Amazing work!",
          "date": "2023-01-15"
        }
      ]
    }
    // ... more photographers
  ],
  "categories": [
      "Maternity",
      "Wedding",
      "Portrait"
  ]
}
(Note: You'll need to create your own db.json file with actual mock data for photographers and their profiles, galleries, and reviews. Ensure it matches the data points expected by your JavaScript logic.)

Start the Mock API Server:
Run JSON Server from your project's root directory (or where db.json is located):

Bash

json-server --watch db.json --port 3000
This will start your mock API on http://localhost:3000. Your JavaScript will fetch data from endpoints like http://localhost:3000/photographers.

Open the Application:
Simply open the index.html file in your web browser. Ensure the mock API server is running in the background for data to load correctly.

💡 Usage
Category Listing Page (index.html):

Browse through the list of photographer cards.
Utilize the Advanced Filters on the sidebar to refine your search by price, rating, style, or city.
Use the Search Bar at the top to find photographers by name, location, or tags.
Click the "Load More" button (or scroll down for infinite scroll) to fetch additional photographers.
Click the "View Profile" button on any card to navigate to that photographer's detailed profile.
Photographer Profile Page:

View the photographer's bio, styles, tags, and pricing.
Explore their work in the Full Gallery section.
Read client Reviews.
Click "Send Inquiry" to open a contact form modal/popup.
📂 Project Structure (Expected)
Photographers/
├── index.html                  # Category Listing Page
├── profile.html                # Photographer Profile Page (or dynamic content loaded on index.html)
├── css/
│   └── style.css               # Main stylesheet
├── js/
│   ├── main.js                 # JavaScript for Category Listing page logic (API calls, filters, search, pagination)
│   └── profile.js              # JavaScript for Photographer Profile page logic (gallery, reviews, inquiry modal)
│   └── mockApi.js              # (Optional) If you have client-side mock data definition before JSON Server
├── db.json                     # Mock API data for JSON Server
└── README.md                   # This file
🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See the LICENSE file in the repository for more information.

📞 Contact
Abhinandan Mishra - abhinandanmishra2005@gmail.com

Project Link: https://github.com/abhinandan-debug/Photographers
