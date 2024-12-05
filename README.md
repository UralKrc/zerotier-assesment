# ZeroTier Assessment

This project is a simple browser-based UI to list devices connected to all configured ZeroTier networks. It allows users to list the devices associated with active networks and view detailed information about each device.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (which includes npm).
- You have installed [Vite](https://vitejs.dev/).

## Getting Started

To get a local copy up and running, follow these steps:

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/UralKrc/zerotier-assessment.git
   ```

2. Navigate to the project directory:

- cd zerotier-assessment

3. Install the dependencies

- npm install

### Configuration

1. Create a .env file in the root of the project directory and add your ZeroTier API base URL and token:

- VITE_ZEROTIER_API_BASE_URL=api/
- VITE_ZEROTIER_API_TOKEN=your_api_token_here

### Running the Project

1. Start the development server:

- npm run dev

2. Build the project for production:

- npm run build

## Improvement Points

1. **State Management**:

   - **Current Approach**: The project currently uses local component state to manage data.
   - **Improvement**: In a real-life project, it would be beneficial to use a state management library like Vuex or Pinia to manage the application's state. This would provide a centralized store for all the data, making it easier to manage and share state across components.

2. **API Integration**:

   - **Current Approach**: The project directly calls the ZeroTier API from the client-side code.
   - **Improvement**: To enhance security and scalability, consider using a backend server to handle API requests. This would allow for better error handling, caching, and the ability to hide API keys from the client-side code.

3. **UI/UX Enhancements**:

   - **Current Approach**: The project uses basic styling and components.
   - **Improvement**: Implement a design/component library like Vuetify, Element Plus, or Bootstrap Vue to provide a more consistent and polished UI. This would also improve the development process by providing pre-built components and styles.

4. **Testing**:

   - **Current Approach**: The project does not include any tests.
   - **Improvement**: Add unit tests, integration tests, and end-to-end tests to ensure the reliability and stability of the application. Tools like Jest, Vue Test Utils, and Cypress/PlayWright can be used for testing.

5. **Localization**:

   - **Current Approach**: The project is only available in English.
   - **Improvement**: Implement localization to support multiple languages. This would make the application more accessible to users in different regions. Libraries like Vue I18n can be used for this purpose.

6. **Enhanced Data Visualization**:

   - **Current Approach**: The project displays data in a list format.
   - **Improvement**: Implement advanced data visualization techniques, such as using SVG or Canvas to create visual maps of networks and devices. This would provide a more interactive and engaging way to view the data.

7. **Environment Variables**:

   - **Current Approach**: The project uses environment variables for API keys.
   - **Improvement**: Ensure that all sensitive information, such as API keys, is stored in environment variables. This enhances security and makes it easier to manage different environments (development, staging, production).

8. **Accessibility**:

   - **Current Approach**: The project does not explicitly address accessibility.
   - **Improvement**: Ensure that the application is accessible to all users, including those with disabilities. Follow accessibility best practices and use tools like Lighthouse to audit and improve accessibility.

9. **Performance Optimization**:

   - **Current Approach**: The project does not include specific performance optimizations.
   - **Improvement**: Implement performance optimization techniques, such as lazy loading, code splitting, and caching, to improve the application's load time and responsiveness.

10. **Documentation**:

    - **Current Approach**: The project includes basic documentation.
    - **Improvement**: Enhance the documentation to include detailed setup instructions, code explanations, and usage examples. This would make it easier for other developers to understand and contribute to the project.
