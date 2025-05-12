new Vue ({
    el:'#app',
    data() {
        return {
            message:"Hello I am learning Vue.js",
            className:"alert alert-danger",
            show:false,
            
            list:[
                'Dev',"Sunder","Raman","Srinivasa Rao"
            ],
            students:[
                {name:"Dev", age: 25},
                {name:"Sunder", age: 26},
                {name:"Raman", age: 27},
            ],
            kilometers:0,
            meters:0,
            firstName:"kapil",
            lastName:"Dev"
        }
    },
    methods: {
        showList() {
            this.show = !this.show;
        },

    },
    computed: {
        toggleClass() {
        return this.show ? 'btn btn-danger' : 'btn btn-primary';
        },
        fullName:{
            get:function(){
                return this.firstName+ ' '+ this.lastName;
            },
            set:function(name){
                var fullname=name.split(' ');
                this.firstName=fullname[0];
                this.lastName=fullname[fullname.length-1];
            }
            
        }
},
watch:{
    kilometers:function(val){
        this.kilometers=val;
        this.meters=val*1000;
    },
    meters:function(val){
        this.meters=val;
        this.kilometers=val/1000;
    }
}
})