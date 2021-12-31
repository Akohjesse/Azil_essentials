const storeItem = (task) => {
        let added;
        if(localStorage.getItem('added') === null){
          added= [];
        } else {
          added = JSON.parse(localStorage.getItem('tasks'));
        }
      
        added.push(task);
      
        localStorage.setItem('added', JSON.stringify(added));
}

export default storeItem