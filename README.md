# Feedr Technical Challenge Feedback

This is a good challagne for me, now I complete this challage and this will be all working in your local by follow steps:

1. clone this repo
2. do yarn install in main root
3. run `npm start`


In this Challenge I used all funcitonal components and some use hoods, following are some details I did this app:

1. use container pattern to seperate controlls and views, all controllers should in file name end with `...Container` and with all view components should with samillar name but no `...Container`. View should looks like only presentation for UI
2. use useContext and useReducer to manage all states
3. add one package called `immer` which really help me deal nested state update (sorry for this, did see your info not change any config, but this is really helpful for reducer)
4. created a HOC component for summary header component, just in case in feature if the summary component need to be extended


Things can do in feature

1. use redux and router to manage all pages and states
2. use localstorage or other storage tools to cache user's data
3. use API to transfer JSON list and call API by using middleware