api docs
https://docs.bitfinex.com/v2/docs
design referred from 
https://www.bitfinex.com/trading
##########Overview
Create an application that replicates the  Ticker widgets functionality from the Trading page of the Bitfinex website/mobile app.
#############Ticker
The ticker is a small widget that shows the current trade pair, 24 hours volume, 24 hours price change in percents, and last price for that pair.
###################General Requirements
All of the widgets should conceptually be the same as the corresponding widgets on the Bitfinex mobile app or the website. They should show the data in real-time and should have the ability to recover after a lost network connection. Add some controls to manage the WebSocket connection such as the “Connect” and “Disconnect” buttons.
################Technological Requirements
Use React for rendering and Redux to store the market data. Feel free to create a custom style for the widgets, it can be very simple. 
Use Bitfinex WebSocket V2 API to obtain the data.
########Suggestions
For React :
You can start with any react-redux boilerplate or CRA.

##useful api data##
To avoid network latency, WebSocket API users receive a data snapshot whenever a connection is opened and will need to update this initial data locally using the updates sent through the open channel.