import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='row  container mx-auto mt-5 mb-5'>
            <div className='col col-sm-12 col-md-5 questions me-5 '>
                <h5>Q:- Difference between Node.JS and Javascript?</h5>
                <h6>

                    1. NodeJS :
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows <br />
                    the javascript to be run on the server-side. Nodejs allows Javascript code to run<br />
                    outside the browser. Nodejs comes with a lot of modules and mostly used in web<br />
                    development.<br />

                    2. JavaScript :<br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that<br />
                    Javascript is the updated version of the ECMA script. Javascript is a high-level<br />
                    programming language that uses the concept of Oops but it is based on prototype<br />
                    inheritance.<br />
                </h6>
            </div>
            <div className='col col-sm-12 col-md-5 questions ms-5'>
                <h5>Q:-  When should you use nodejs and when should you use?</h5>
                <h6>1

                    Nodejs is a Javascript engine that you can write any application you want with <br />
                    (by programming in the Javascript language). It runs your Javascript code. Most <br />
                    commonly, it is used to build servers that can respond to web requests, though it <br />
                    can be used for lots of other types of code too. <br />

                    MongoDB is a database engine. Code within some application or server uses MongoDB to <br />
                    save, query or update data in a database. There are many web servers built with nodejs <br />
                    that will then use MongoDB for storing data. <br />

                    MongoDB offers an API library that runs within a Nodejs application to give you <br />
                    programmatic access to MongoDB so you can create databases and then add, query, <br />
                    update or delete data from the MongoDB database. MongoDB also has API libraries for <br />
                    other programming environments such as Python, Java, etc... <br />

                    These two technologies are for different parts of a typical web server system.<br />
                    You don't substitute one for the other. Instead, you can use them together.</h6>
            </div>
            <div className='col col-sm-12 col-md-6 questions mx-auto mt-5'>
                <h5>What is the purpose of jwt and how does it work</h5>
                <h6>JSON Web Token, is an open standard used to share security information between two<br />
                    parties — a client and a server. Each JWT contains encoded JSON objects, including<br />
                    a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the<br />
                    claims cannot be altered after the token is issued.  <br />
                    <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are <br />
                    used to transmit information between two parties. What these claims are depends on<br />
                    the use case at hand. For example, a claim may assert who issued the token, how long<br />
                    it is valid for, or what permissions the client has been granted.<br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using<br />
                    base64. In the most common serialization format, compact serialization, the JWT looks<br />
                    something like this: xxxxx.yyyyy.zzzzz.<br />
                    Once decoded, you will get two JSON strings:<br />
                    (1)  The header and the payload.<br />
                    (2) The signature.

                </h6>
            </div>
        </div>
    );
};

export default Blogs;