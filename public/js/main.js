new Vue({
    el: '#vapp',
    data: {
        collection: [
            {
                image: '/img/dogs/dog-1.jpg',
                hashtags: ['happy']
            },
            {
                image: '/img/dogs/dog-2.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-3.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-4.jpg',
                hashtags: ['happy']
            },
            {
                image: '/img/dogs/dog-5.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-6.jpg',
                hashtags: ['happy']
            },
            {
                image: '/img/dogs/dog-7.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-8.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-9.jpg',
                hashtags: ['happy']
            },
            {
                image: '/img/dogs/dog-10.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-11.jpg',
                hashtags: ['happy', 'hungry']
            },
            {
                image: '/img/dogs/dog-12.jpg',
                hashtags: ['happy', 'curious']
            },
            {
                image: '/img/dogs/dog-13.jpg',
                hashtags: ['curious', 'sad']
            },
            {
                image: '/img/dogs/dog-14.jpg',
                hashtags: ['happy']
            },
            {
                image: '/img/dogs/dog-15.jpg',
                hashtags: ['curious']
            },
            {
                image: '/img/dogs/dog-16.jpg',
                hashtags: ['happy']
            }
            
            ]
    },
    computed: {
        listedTags: function(){
            var collection  = this.collection,
                listedTags  = [],
                isListed    = false;
            
            for(var i = 0; i < collection.length; i++){
                for(var t = 0; t < collection[i].hashtags.length; t++){
                    if(listedTags.length === 0){
                        // Add the first listed tag
                        listedTags.push(collection[i].hashtags[t]);
                    } else {
                        for(var p = 0; p < listedTags.length; p++){
                            if(listedTags[p] === collection[i].hashtags[t]){
                                isListed = true;
                                break;
                            }
                        }
                        if(isListed){
                            isListed = false;
                            continue;
                        } else {
                            listedTags.push(collection[i].hashtags[t]);
                        }
                    }
                }
            }
            
            return listedTags;
        }
    }
    
});