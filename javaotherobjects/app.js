// const blogs = [
//     { title: 'whyt mac and cheese is good', likes: 30},
//     { title: '10 recepies with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'john',
    age: 21 ,
    email: 'fake@email.com' ,
    location: 'texas',
    blogs: [    { title: 'whyt mac and cheese is good', likes: 30},
    { title: '10 recepies with marmite', likes: 50}],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title , blog.likes );
        });
    }
};

user.logBlogs();