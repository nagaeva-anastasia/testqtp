'Declare Environment Variable (Global Variable)
Environment.Value("type") = "смартфон/коммуникатор"
Environment.Value("platform") = "Android"

' step 4
' apply filters
SetType Environment.Value("type")
SetPlatform Environment.Value("platform")

SetPriceFromAndTo DataTable("priceFrom", dtLocalSheet), DataTable("priceTo", dtLocalSheet)

ApplyFilters

' step 5
' check filters

' отразилась таблица с результатами поиска
Browser("YandexMarket").Page("SearchResult").WebElement("searchItemLink").GetROProperty("y") <> "0"

Browser("YandexMarket").Page("SearchResult").WebEdit("priceFromFilter").Check CheckPoint("IsPriceFromCorrect")
Browser("YandexMarket").Page("SearchResult").WebEdit("priceToFilter").Check CheckPoint("IsPriceToCorrect")

' проверить type и platform
IsCheckboxOn Environment.Value("type")
IsCheckboxOn Environment.Value("platform")

Browser("YandexMarket").Back
