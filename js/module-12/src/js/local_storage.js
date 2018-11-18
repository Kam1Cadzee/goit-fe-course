const LOCALSTORAGE = (w => {
    if(!w) return;

    const isActive = 'localStorage' in w;

    const get = key => {
      try {
          const state = localStorage.getItem(key);
          return state === null
            ? undefined
              : JSON.parse(state);
      }  catch (err) {
          console.error('Get state error: ', err);
      }
    };
    const set = (key, value) => {
        try {
            const state = JSON.stringify(value);
            localStorage.setItem(key, state);
        }
        catch (err) {
            console.error('Set state error: ', err);
        }
    };
    const remove = key => localStorage.removeItem(key);
    const clear = () => localStorage.clear();
    const publicApi = {
        isActive,
        get,
        set,
        remove,
        clear
    };

    return publicApi;
})(window);
export default LOCALSTORAGE;