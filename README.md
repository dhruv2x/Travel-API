# Travel-API

Welcome to the Travel-API, a Node.js API that takes destination and duration from the user and returns a day-by-day travel itinerary using the ChatGPT API.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Travel-API is designed to provide users with a personalized day-by-day travel itinerary based on their chosen destination and travel duration. It leverages the power of the ChatGPT API to generate relevant and engaging travel plans for users.

## Installation

To run the Travel-API on your local machine, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/dhruv2x/Travel-API.git
```

2. Install the required dependencies:
```bash
cd Travel-API
npm install
```

3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add your ChatGPT API key in the `.env` file (You can obtain this from the ChatGPT API provider).

## Usage

1. Run the API server:
```bash
npm start
```

2. Access the API at `http://localhost:3000`.

## Endpoints

The API provides the following endpoints:

- `POST /generate-itinerary`: This endpoint expects a JSON payload containing `destination` and `duration` (number of days) of the trip. It will return a JSON response containing the day-by-day travel itinerary.

## Example

To generate a travel itinerary, make a POST request to `http://localhost:3000/generate-itinerary` with the following payload:

```json
{
  "destination": "New York",
  "duration": 5
}
```

The API will respond with a JSON object containing the personalized itinerary:

```json
{
  "destination": "New York",
  "duration": 5,
  "itinerary": [
    "Day 1: Explore Central Park and visit the Metropolitan Museum of Art.",
    "Day 2: Discover the Statue of Liberty and Ellis Island.",
    "Day 3: Experience the vibrant atmosphere of Times Square and Broadway.",
    "Day 4: Visit the Empire State Building and take a ferry to Staten Island.",
    "Day 5: Enjoy the views from the Top of the Rock and shop along Fifth Avenue."
  ]
}
```

## Contributing

Contributions to the Travel-API are welcome! If you find any issues or want to add new features, feel free to open a pull request. Make sure to follow the existing code style and add appropriate tests for new functionalities.

## License

The Travel-API is open-source and uses the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

---

We hope you enjoy using the Travel-API and that it helps you plan your next exciting adventure! If you have any questions or need assistance, please don't hesitate to reach out.

Happy traveling! 🌍✈️
