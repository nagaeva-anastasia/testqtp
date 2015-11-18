' step1, check logo
Browser("YandexMarket").Page("Main").Image("TopLogo").Check CheckPoint("IsTopLogoCorrect")

' step2, select phones section
Browser("YandexMarket").Page("Main").Link("ElectronicsLink").Click
Browser("YandexMarket").Page("Electronics").Link("MobilePhonesLink").Click
Browser("YandexMarket").Page("MobilePhones").WebElement("MobilePhonesHeader").Check CheckPoint("IsMobilePhonesHeader")
