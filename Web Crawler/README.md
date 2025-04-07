# Web Crawler Project: Extracting URL Parameters

## Description

This project is a command-line utility designed to crawl a given set of URLs and efficiently extract all parameters present within their query strings. It's a valuable tool for analyzing URL structures, identifying tracking parameters, or gathering specific data points embedded in web addresses. The crawler processes the provided URLs and saves the extracted parameters into a structured CSV file for easy analysis.

## Key Features

* **Command-Line Interface:** Simple and intuitive command-line usage.
* **Multiple URL Processing:** Accepts multiple URLs as input.
* **Comprehensive Parameter Extraction:** Identifies and extracts all key-value pairs from the URL query strings.
* **Structured Output:** Saves the extracted data in a well-formatted `output.csv` file.
* **Clear Dependencies:** Uses well-established Python libraries for web requests and HTML parsing (though currently focused on URL parameters, future enhancements could leverage BeautifulSoup).

## Getting Started

Follow these steps to run the web crawler:

1.  **Clone the Repository:**
    ```bash
    git clone <repository_url>
    cd <project_folder>
    ```
    *(Replace `<repository_url>` with the actual URL of your repository and `<project_folder>` with the name of the cloned directory.)*

2.  **Set Up a Virtual Environment (Recommended):**
    ```bash
    python -m venv venv
    ```

3.  **Activate the Virtual Environment:**
    * **On Windows:**
        ```bash
        .\venv\Scripts\activate
        ```
    * **On macOS and Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *(This command will install the `requests` and `beautifulsoup4` libraries, as specified in your `requirements.txt` file.)*

5.  **Run the Web Crawler:**

    Execute the `web_crawler.py` script with the `-u` flag followed by the URLs you want to process, and optionally the `-o` flag to specify the output file name.

    ```bash
    python web_crawler.py -u "[https://example.com?param1=value1&param2=another_value](https://www.google.com/search?q=https://example.com%3Fparam1%3Dvalue1%26param2%3Danother_value)" "[https://another-url.com?key=123&id=456](https://www.google.com/search?q=https://another-url.com%3Fkey%3D123%26id%3D456)" -o extracted_parameters.csv
    ```

    * `-u`: Specifies one or more URLs to crawl. Enclose each URL in double quotes.
    * `-o`: (Optional) Specifies the name of the output CSV file. If not provided, a default name (e.g., `output.csv`) will be used.

6.  **View the Output:**

    The extracted URL parameters will be saved in the `extracted_parameters.csv` file (or the name you specified). You can open this file with any spreadsheet software or text editor.

## Requirements

* **Python:** Version 3.x is required.
* **Dependencies:**
    * `requests`: For making HTTP requests to fetch the content of web pages (though currently only used for the initial URLs).
    * `beautifulsoup4` (Beautiful Soup): A library for parsing HTML and XML documents (while the current version focuses on URL parameters, this dependency suggests potential for future HTML content extraction).

    You can install these dependencies using the `pip install -r requirements.txt` command. Ensure you have a `requirements.txt` file in your project root with the following content:

    ```
    requests
    beautifulsoup4
    ```

## Output Format

The `output.csv` file will contain the extracted URL parameters. Each row in the CSV will represent a URL that was processed, and the columns will represent the extracted parameter names and their corresponding values.

**Example `output.csv`:**

```csv
URL,param1,param2,key,id
[https://example.com?param1=value1&param2=another_value,value1,another_value](https://www.google.com/search?q=https://example.com%3Fparam1%3Dvalue1%26param2%3Danother_value,value1,another_value),,
[https://another-url.com?key=123&id=456,,value1,123,456](https://www.google.com/search?q=https://another-url.com%3Fkey%3D123%26id%3D456,,value1,123,456)