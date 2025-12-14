# 🧑‍🍳 React Chef Llama

**React Chef Llama** is an AI-powered recipe generator built with **React** and **Vite**, using the **Meta Llama 3.1 8B Instruct** model.  
Simply enter the ingredients you have on hand, and Chef Llama will craft a delicious recipe idea for you — instantly!

---

## ✨ Features

- 🥣 **Ingredient-based recipe generation** – add whatever you have in your kitchen and let AI do the rest.  
- 🧠 **Powered by Meta Llama 3.1 8B Instruct** – delivers natural, creative, step-by-step recipes.  
- ⚡ **Modern React + Vite setup** – fast development, hot reloading, and TypeScript support.  
- 💅 **Clean, responsive UI** – lightweight and easy to use on any device.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + TypeScript |
| Bundler | Vite |
| Styling | CSS |
| AI Model | `meta-llama/Llama-3.1-8B-Instruct` |
| Integration | Custom API function (`getRecipeFromMistral`) |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AK08/react-chef-llama.git
cd react-chef-llama
```

### 2. Install dependencies

```
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add your Hugging Face access token:
```bash
VITE_HF_ACCESS_TOKEN=your_api_key_here
```

#### 🪄 How to Get Your Hugging Face Access Token

1. Log in to [Hugging Face](https://huggingface.co/).
2. Go to **Settings** → **Access Tokens**.
3. Click **"New token"** and create a token (for example, `chef-llama`).
4. Under token permissions, make sure you enable:
   * ✅ Make calls to Inference Providers
5. Copy the generated token and paste it into your `.env` file as shown above.


### 4. Run the app locally

```
npm run dev
```