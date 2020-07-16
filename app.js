
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain = [ 'com', 'net', 'us', 'io', 'etc'];

combos = [];

for(let i = 0; i < pronoun.length; i++) {

     for(let j = 0; j < adj.length; j++) {

        for (let k = 0; k < noun.length; k++) {

            for (let m = 0; m < domain.length; m++) {
                
                combos.push(pronoun[i] + adj[j] + noun[k] + "." + domain[m]);
            }
            
            
        }
        
     }

}

document.write(combos);


