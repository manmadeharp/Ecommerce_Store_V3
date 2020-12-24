# the project development TimeLine
developing the home UI and registration
* I first started developing the ui in pages **auth-(Login Register)** and **Home**
* I also added the **Header** in the **components.nav** folder and imported it in the pages I created I used **antd** for the design
* I then created a new project in firebase and linked the api to my project in the firebase config file I added the firebase auth and googleauthprovider
to it so I can setup user registration it is done through firebases passwordless authentication.

creating redux global states
* I used redux to globalize the firebase authentication process so that it can be used in other processes
useSelector, useDispatch, useState, useEffect.
* setup userReducer to edit redux state with when needed
* I added a forgot password feature

started on the backend
* 