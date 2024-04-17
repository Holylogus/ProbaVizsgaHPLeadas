import axios from "axios"; 

export default axios.create({ 

    // alap backend api kiszolgáló elérési útjának beállítása 

    baseURL: "http://localhost:8000", 

  

    //beállítjuk, hogy  a kérések azonosítása coockie-k segítségével történik. 

    withCredentials: true, 

}); 