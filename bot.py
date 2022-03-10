#!/usr/bin/python3

from random import randint
import sys, json, time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# init headless chrome instance
chrome_options = Options()
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(options=chrome_options)

def search_scroll_click(bot_name):
    # search google for climate news
    driver.get("https://www.google.com/search?q=climate+change+news&tbm=nws&num=100")
    time.sleep(1)

    # select search result
    articles = driver.find_elements_by_tag_name("g-card")
    selected_article = articles[randint(0, len(articles)-1)]
    article_text = selected_article.text
    article_text = str(article_text).split("\n")[1]
    print("🟩", selected_article.text)
    selected_article.click()

    # scroll and pause to load info
    for _ in range(randint(3, 8)):
        time.sleep(randint(1, 5))
        random_y = randint(0, 1850)
        driver.execute_script("window.scrollTo(0, "+ str(random_y) + ");")    

    # update data.json 
    with open('data.json') as json_file:
        data = json.load(json_file)
        
    if not data.get(bot_name):
        data[bot_name] = {
            'total_sites': 0,
            'recent_site': article_text
        }
        
    # add total sites visited
    data[bot_name]["total_sites"] = data[bot_name]['total_sites'] + 1
    # update with recent visited site
    data[bot_name]['recent_site'] = article_text
    print("--UPDATED: ", bot_name, " with ", 
                (data[bot_name]['total_sites'] + 1), "clicks and site ",
                article_text )

    #write to file
    json_string = json.dumps(data)
    with open('data.json', 'w') as outfile:
        outfile.write(json_string)

#----------#--------------------------#------#

for i in range(10):
    search_scroll_click("Pointy")
    search_scroll_click("Spikey")
    search_scroll_click("Cloudy")
    search_scroll_click("Stumpy")
    search_scroll_click("Bulby")
    search_scroll_click("Swirly")
    search_scroll_click("Boxy")
