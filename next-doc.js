// next 13
//so you have to replace index.js wite page.js thats better 
// you can have dynmic route and nested route and you can groupe it with '(...)' somting like this 

const { Suspense } = require("react");
const { default: RootLayout } = require("./app/layout");
const { getStaticPaths } = require("next/dist/build/templates/pages");


// ok you can create slug just like the next 12 and there is no diffrent between them you can do like rest of slugs with [...somthing] this mean that the rest of them
// you can create slug with any name

//? oh im almost forgat in next 13 there is something name layout and it is a server component you can use layout in any folder 
//? and there is one in main folder (app)  you can use it to show something in any pages and you can use it in any folder of courese
//! just remember if you turn layout to client component it children and props all become a client componnet and you cant use server components in it
//! use layout waisly


//* --------------------------------server componnets and client components-----------------------------------------
//? first thing that every one misundrestand it is server componnet is not ssr (server side rendering)
//? sacend thing that every one misundrestand it is client componnet is not csr (client side rendering)


// when you want to use client thing such as use state and use effect and else you have to use client components 
// the pages diffualt is server components 
// and you dont need to add any things 

//! but when you want to use an client component you have to add "use client"


//? nextjs13 add something that make our work eseyer and that is fatch catching 
// you can use fatch in server components and client components but if you have only one url that fatch in a several page 
//! next js is come to save it to it catch you dont need to send te request several time only first time 
// and next js is smart enough to know that you have the same url and it will cache it


//? if you want your page to be a client side rendering you can do this:
//* fetch(url , {catch:no-catch}) ssr            this is something like getStaticProps
//* fetch(url , {catch:force-catch}) csr         this like getServersideProps
//* fetch(url , {next: {revalidate:10} }) isr    and this ig like getStaticProps only with the revalidate option you can see it in build of project

//?  one point about client component: Since client componnet turn all of his children to client componnet you better to use it in in the leaf 
//*  thats mean use it some how that wont effect on every thing else and wont have children



//? the props some time can kill your site that small m.f is the worst enamy of programmer in next js
// perhaps you have to realise that if you fatch a url and get an long array and send it as a props to a page or componnet that use in one page
// all of that array gose to client and save as script in cliant side thats small size i know but imagine a hondred of em
// that kill performace you know and couse that seo worker haunt us  
//! so last word (this consept)  just send the thing that you need if you dont want to die by an seo worker 




// ok this might be a little triky if you have 2 or more component that use async fatch in it you better to use this one 
// in code world all of your componnet that use async will wait for the first one to finish and then the second one and so on
// you can do something that if the first one take to long the sacend one wont wait for it and show the componnt and a loading is that cool hah
// in that case i give you  server side streaming
//* <suspense fallback={<div>loading</div>}> {children}  </suspense>
// and it import form react it not show him self in dev mode just in build mode 


// ok baby this shit is about get realy
// you can use the loading.js mother f@*/r to make a loading page
// you can made any loading in any folder but  if there be just one is wary better 
// be advise that loading.js file is just warp the main page and its children not layout thats mean you have loading in just app/page.js




//! and you have to remember the layout is always keep his state its mean if you have a leaf componnet that is a counter and increase it in layout it will keep it value in all pages 
//? what happend if we want to reset state when page get change like reset counter or something :
//*  for that issue you can use tamplate.js its just like layout.js but its state will reset when route change






//? you can handle error in client using error.js 
//! error.js is must to be a client componnet // so dont forget the 'use client' 
//* there is another prop that error.js get  and it is reset : its a function and you call it to reset component or page that trow error


// well error.js is only handle error in page.js look at this template:

//? <RootLayout>                                                                               |   so how we handle error of this area
//    <RootTemplate>                                                                           |
//!        <RootErrorHandler>                        |  its only handle error in this erea     |                                    
//            <Suspense fallback={<Loading />}>      |                                         |
//                <PageRoute></PageRoute>            |                                         |
//            </Suspense>                            |                                         |
//!        </RootErrorHandler>                       |                                         |
//   </RootTemplate>                                                                           |
//? </RootLayout>                                                                              |

// we use global-error.js to handle errors globally its just like error.js but handle globaly



//& getStaticPaths in next 13
//?  genrate static props is like getStaticPath 
//*  we use to get page id before we render the page
//!  its use in static page 
// please check app/users/[id]/page.js
// it have to return an array { id: user.id }





//* --------------------------------API------------------------------------



