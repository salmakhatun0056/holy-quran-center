import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='blogs-title'> This is Blogs</h1>
            <div className='blogs-container'>
                <div >
                    <h3>Inline,Block VS Inline-Block</h3>
                    <p>Inline elements do not start on a new line and only takes up as much width as its content.But block elements start ona a new line and takes up the full width available.Inline-block means block formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.The inline-block actually makes the block element look like inline.</p>
                </div>
                <div >
                    <h3>What is Semantic Tag in HTML?</h3>
                    <p>
                        Sematic tags are those tags that are meaningful to both the developer and the browser. Semantic tags help the search engine to determine the content. Webpages with semantic tags are much easier to read. Different tags for different layouts. Some of semantic HTML tags are
                        &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;