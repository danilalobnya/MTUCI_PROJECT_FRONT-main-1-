import React from 'react'



function useRemoveForm(ref, disable) {
    React.useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                disable();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {

          document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);
}


export default useRemoveForm