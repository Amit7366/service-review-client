import { Accordion } from "flowbite-react";
import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs- Plabon Fitness Trainer')
  return (
    <div>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Difference between SQL and NoSQL</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.
            </p>

           
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is JWT, and how does it work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 
            </p>
            <p className="text-gray-500 dark:text-gray-400">
            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          What is the difference between javascript and NodeJS?
          </Accordion.Title>
          <Accordion.Content>

            <p className="mb-2 text-gray-500 dark:text-gray-400">
            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
            </p>
            
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          How does NodeJS handle multiple requests at the same time?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Node is a runtime, and no it is not single threaded, nor is is multithreaded. Confusing? Yes, but true. JavaScript is single threaded. The Node runtime is not. By default, Node only executes one JavaScript instance unless instructed to use more.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.


            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Node introduced worker threads in Node 13. These run on a separate JavaScript thread. In larger scale Node applications, developers tend to create one worker per CPU to maximize parallel processing capacity.
            </p>
            
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;
