(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=(a(40),a(8)),s=a(9),i=a(11),m=a(10),d=a(12),u=a(18),h=(a(22),a(3)),p=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books,a=this.props.cart,n="Your list is empty!";return this.props.emptyResultString&&(n=this.props.emptyResultString),l.a.createElement("div",{className:"m-4"},(!t||0===t.length)&&l.a.createElement("p",{className:"text-center w-responsive mx-auto mb-3"},n),t&&t.length>0&&l.a.createElement("div",{style:{height:"70vh",overflow:"auto"}},l.a.createElement("table",{id:"dtVerticalScrollExample",className:"table table-striped"},l.a.createElement("thead",{className:"primary-color white-text"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Book Name"),l.a.createElement("th",{scope:"col"},"Author"),l.a.createElement("th",{scope:"col"},"Category"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,t&&t.map(function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("th",{scope:"row"},n+1),l.a.createElement("td",null,t.BookName),l.a.createElement("td",null,t.AuthorName),l.a.createElement("td",null,t.Category),l.a.createElement("td",null,l.a.createElement("h6",null,l.a.createElement("a",{onClick:function(){return e.props.onCartUpdate(t)}},a.has(t.id)?l.a.createElement("span",{className:"badge badge-danger"},"Remove"):l.a.createElement("span",{className:"badge badge-success"},"Add to cart"))),l.a.createElement("h6",null,l.a.createElement("a",{href:t.Links[0],target:"_blank"},l.a.createElement("span",{className:"badge badge-info"},"Download")))))})))))}}]),t}(l.a.Component),g={"content-type":"application/json","api-Key":"B886F1DAC41FB38BA0126061A30AE32A"},E=function(e){var t="";return e.text&&(t+="&search="+e.text),e.categories&&e.categories.length>0&&(t+="&$filter=Category/any(t: search.in(t, '"+e.categories+"'))"),fetch("https://librarysearchservice.search.windows.net/indexes/booksindex/docs?api-version=2019-05-06"+t,{method:"GET",headers:g}).then(function(e){return e.json()}).then(function(e){return e.value})},v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onSelectCategories",value:function(e){var t=e.nativeEvent.target.selectedOptions,a=Object.values(t).map(function(e){return e.text});this.props.onSelectCategories(a)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null,"Filter"),l.a.createElement("section",{className:"my-4"},l.a.createElement("h4",null,"Language"),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language1",name:"inlineDefaultRadiosExample",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"language1"},"English")),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language2",name:"inlineDefaultRadiosExample"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"language2"},"Hindi")),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language3",name:"inlineDefaultRadiosExample"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"language3"},"Spanish"))),l.a.createElement("section",{className:"my-4"},l.a.createElement("h4",null,"Format"),l.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format1",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"format1"},"pdf")),l.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format2",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"format2"},"epub")),l.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format3",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"format3"},"txt"))),l.a.createElement("section",{className:"my-4"},l.a.createElement("h4",null,"Categories"),l.a.createElement("select",{className:"custom-select",style:{height:"220px"},multiple:!0,onChange:function(t){return e.onSelectCategories(t)}},l.a.createElement("option",{value:"2"},"Fiction"),l.a.createElement("option",{value:"3"},"Poetry"),l.a.createElement("option",{value:"4"},"Science"),l.a.createElement("option",{value:"5"},"Economics"),l.a.createElement("option",{value:"6"},"Psychology"),l.a.createElement("option",{value:"7"},"History"),l.a.createElement("option",{value:"8"},"Sociology"),l.a.createElement("option",{value:"9"},"Mathematics"),l.a.createElement("option",{value:"1"},"Geography"),l.a.createElement("option",{value:"10"},"Computers"))))}}]),t}(l.a.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],query:{text:"",language:"en",format:[],categories:[]},modal:!1},a.updateQueryText=function(e){var t=a.state.query;t.text=e,a.setState({query:t})},a.addAllBooks=function(){a.props.onCartAddAll(a.state.books)},a.removeAllBooks=function(){a.props.onCartRemoveAll(a.state.books)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onSearchClicked",value:function(e){e.preventDefault();var t=this;E(this.state.query).then(function(e){e&&t.setState({books:e})})}},{key:"queryCategories",value:function(e){var t=this.state.query;t.categories=e,this.setState({query:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement(v,{onSelectCategories:function(t){return e.queryCategories(t)}})),l.a.createElement("div",{className:"col-md-9"},l.a.createElement("form",{className:"form-inline mx-4 mb-4"},l.a.createElement("input",{className:"form-control",style:{width:"100%"},type:"search","aria-label":"Search",placeholder:"Search by title or author",value:this.state.query.text,onChange:function(t){return e.updateQueryText(t.target.value)}}),l.a.createElement("button",{className:"btn btn-primary btn-md ml-4 my-2 my-sm-0",onClick:function(t){return e.onSearchClicked(t)}},"Search")),l.a.createElement(p,{books:this.state.books,cart:this.props.cart,onCartUpdate:function(t){return e.props.onCartUpdate(t)},emptyResultString:""}),this.state.books&&this.state.books.length>0&&l.a.createElement(h.e,null,l.a.createElement(h.a,{color:"danger",disabled:this.state.books<=0,onClick:this.removeAllBooks},"Remove all"),l.a.createElement(h.a,{color:"primary",disabled:this.state.books<=0,onClick:this.addAllBooks},"Add all")))))}}]),t}(n.Component),f=a(20),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isModalOpen:!1,collection:{name:null,books:[]}},a.toggleCollectionModal=function(e){if(e){var t=Object(f.a)(a);E({text:e}).then(function(a){if(a){if(t.props.cart.size>0){var n=!0,l=!1,r=void 0;try{for(var o,c=a[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var s=o.value;t.props.cart.has(s.id)&&(s.isAdded=!0)}}catch(m){l=!0,r=m}finally{try{n||null==c.return||c.return()}finally{if(l)throw r}}}var i={name:e,books:a};t.setState({isModalOpen:!0,collection:i})}}).catch(function(e){alert("Failed to retrieve collection!")})}else a.setState({isModalOpen:!1,collection:{name:null,books:[]}})},a.addAllBooks=function(){a.props.onCartAddAll(a.state.collection.books)},a.removeAllBooks=function(){a.props.onCartRemoveAll(a.state.collection.books)},a.closeCollectionModal=function(){a.toggleCollectionModal(null)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container my-5"},l.a.createElement("h1",{className:"text-center"},"Most Downloaded"),l.a.createElement("div",{className:"row mt-4 mb-5"},l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/library.png",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"K-12 US Literature"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Robert Koester")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"This collection comprises works of American literature from colonial to contemporary times, including poetry, short stories, novels, drama, and nonfiction. The literary works provide opportunities for critical writing, creative projects, and online discussions. Students develop vocabulary skills and refresh their knowledge of grammar, usage, and mechanics in preparation for standardized tests."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("K-12 US Literature")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/stem.png",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"STEM for high school students"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Darren Moffatt")),l.a.createElement("p",null,"Language: English, Spanish"),l.a.createElement("p",{className:"card-text"},"Discover meaningful, rigorous books and text sets for a fresh take on STEM/STEAM study. Our books explore the physical, life, health, earth and space sciences along with engineering, art, mathematics, and technology. These high-interest nonfiction, realistic fiction, and science fiction books provide an engaging opportunity to discuss timely topics that will expand student knowledge and inspire the scientists of the future."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("STEM for high school students")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/fairy_tale.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Fairy Tales"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Vivian Guo")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"Read our huge collection of famous fairy tales and bedtime stories. Brothers Grimm fairy tales, Hans Christian Andersen, Charles Perrault, Aesop's fables,..."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("Fairy Tales")}},"Open collection"))))),l.a.createElement("h1",{className:"text-center"},"Newest Collections"),l.a.createElement("div",{className:"row mt-4 mb-5"},l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/books_love.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"For the Love of Books"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Jupiter Books")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"For the Love of Books gathers all of Thatcher Wine's philosophy about books, curating and designing libraries into one volume. Explore the significance of the home library, embellished with alluring photography and illustrations, in a keepsake worthy of any bibliophile\u2019s collection. For the Love of Books shares the vision of Juniper Books, and embraces the roles that books fulfill in our lives and their staying power."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("For the Love of Books")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/african_books.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"African History"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Michelle Lee")),l.a.createElement("p",null,"Language: English, Spanish"),l.a.createElement("p",{className:"card-text"},"African history is a massive and intricate subject, world-shaking events have shaped the continent's history, from the early men and women who left their footsteps in volcanic ash to the liberation of Nelson Mandela, and a whole lot of wars, conquests, civilisations and revolutions in between."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("African History")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/comicbooks.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Comic Books"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Tina Wen")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"My Dad and I share a passion for comics. I show you guys our highlighted key issues from our silver age comic book collection! We both have many more key comics from all eras (Golden Age, Silver Age, Bronze Age and later) and thousands upon thousands more comics over all!"),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("Comic Books")}},"Open collection"))))),l.a.createElement("h1",{className:"text-center"},"High School Book Collections"),l.a.createElement("div",{className:"row mt-4 mb-5"},l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/library.png",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Math for Middle School Students"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Robert Koester")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"This collection comprises works of American literature from colonial to contemporary times, including poetry, short stories, novels, drama, and nonfiction. The literary works provide opportunities for critical writing, creative projects, and online discussions. Students develop vocabulary skills and refresh their knowledge of grammar, usage, and mechanics in preparation for standardized tests."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("K-12 US Literature")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/stem.png",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"STEM for high school students"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Darren Moffatt")),l.a.createElement("p",null,"Language: English, Spanish"),l.a.createElement("p",{className:"card-text"},"Discover meaningful, rigorous books and text sets for a fresh take on STEM/STEAM study. Our books explore the physical, life, health, earth and space sciences along with engineering, art, mathematics, and technology. These high-interest nonfiction, realistic fiction, and science fiction books provide an engaging opportunity to discuss timely topics that will expand student knowledge and inspire the scientists of the future."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("STEM for high school students")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/african_books.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"African History"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Michelle Lee")),l.a.createElement("p",null,"Language: English, Spanish"),l.a.createElement("p",{className:"card-text"},"African history is a massive and intricate subject, world-shaking events have shaped the continent's history, from the early men and women who left their footsteps in volcanic ash to the liberation of Nelson Mandela, and a whole lot of wars, conquests, civilisations and revolutions in between."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("African History")}},"Open collection"))))),l.a.createElement(h.d,{isOpen:this.state.isModalOpen,toggle:this.closeCollectionModal,centered:!0,size:"lg"},l.a.createElement(h.f,{toggle:this.closeCollectionModal},this.state.collection.name),l.a.createElement(p,{books:this.state.collection.books,cart:this.props.cart,onCartUpdate:function(t){return e.props.onCartUpdate(t)},emptyResultString:"Collection result is empty!"}),l.a.createElement(h.e,null,l.a.createElement(h.a,{color:"secondary",onClick:this.closeCollectionModal},"Close"),l.a.createElement(h.a,{color:"danger",disabled:this.state.collection.books<=0,onClick:this.removeAllBooks},"Remove all"),l.a.createElement(h.a,{color:"primary",disabled:this.state.collection.books<=0,onClick:this.addAllBooks},"Add all"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isModalOpen:!1,collection:{name:null,books:[]}},a.toggleCollectionModal=function(e){if(e){var t=Object(f.a)(a);E({text:"*"}).then(function(a){if(console.log(a),a){if(t.props.cart.size>0){var n=!0,l=!1,r=void 0;try{for(var o,c=a[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var s=o.value;t.props.cart.has(s.id)&&(s.isAdded=!0)}}catch(m){l=!0,r=m}finally{try{n||null==c.return||c.return()}finally{if(l)throw r}}}var i={name:e,books:a};t.setState({isModalOpen:!0,collection:i})}}).catch(function(e){console.log(e),alert("Failed to retrieve collection!")})}else a.setState({isModalOpen:!1,collection:{name:null,books:[]}})},a.addAllBooks=function(){a.props.onCartAddAll(a.state.collection.books)},a.removeAllBooks=function(){a.props.onCartRemoveAll(a.state.collection.books)},a.closeCollectionModal=function(){a.toggleCollectionModal(null)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container my-5"},l.a.createElement("h1",{className:"text-center"},"My Favorites"),l.a.createElement("p",{className:"text-center"},"Your favorite collections"),l.a.createElement("div",{className:"row mt-4 mb-5"},l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/rocket.jpg",alt:"Rocket ship"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Sci-fi Literature"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Jurels Neve")),l.a.createElement("p",null,"Language: English, Francais"),l.a.createElement("p",{className:"card-text"},"Blast off with extraordinary tales featuring time travel, parallel universes, space exploration, extraterrestrial life and more!."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("Sci-fi Literature")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/childrens_books.jpg",alt:"A stack of children's books"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Hindi Children's Books"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Bindi Soohk")),l.a.createElement("p",null,"Language: Hindi"),l.a.createElement("p",{className:"card-text"},"\u092f\u0939 \u0938\u093e\u0930\u093e\u0902\u0936 \u0939\u093f\u0902\u0926\u0940 \u092e\u0947\u0902 \u0939\u0948\u0964 \u092e\u0941\u091d\u0947 \u0915\u094b\u0908 \u0939\u093f\u0902\u0926\u0940 \u0928\u0939\u0940\u0902 \u0906\u0924\u0940 \u0907\u0938\u0932\u093f\u090f \u0906\u092a\u0915\u094b \u0907\u0938 \u092c\u0941\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0905\u0928\u0941\u0935\u093e\u0926\u093f\u0924 \u092a\u093e\u0920 \u0915\u094b \u092a\u0922\u093c\u0928\u093e \u0939\u094b\u0917\u093e\u0964 \u0907\u0938 \u092d\u092f\u093e\u0928\u0915 \u0935\u0930\u094d\u0923\u0928 \u0915\u0947 \u0932\u093f\u090f \u0915\u094d\u0937\u092e\u093e \u0915\u0930\u0947\u0902, \u0932\u0947\u0915\u093f\u0928 \u092f\u0939 \u0938\u092c\u0938\u0947 \u0905\u091a\u094d\u091b\u093e \u0939\u0948 \u091c\u093f\u0938\u0947 \u0906\u092a \u092f\u0939\u093e\u0901 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u091c\u093e \u0930\u0939\u0947 \u0939\u0948\u0902\u0964"),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("Hindi Children's Books")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"/front-end/assets/danish.jpg",alt:"A guy stands at the bow of a ship"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Scandinavian History"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Khang Vu")),l.a.createElement("p",null,"Language: Dansk, Suomalainen, Svenska"),l.a.createElement("p",{className:"card-text"},"Dette resume er p\xe5 dansk. Jeg kender ingen dansk. S\xe5 du bliver bare n\xf8dt til at l\xe6se denne d\xe5rligt oversatte tekst. Undskyld for denne forf\xe6rdelige beskrivelse, men dette er det bedste, du kommer hertil. Jeg kender heller ikke nogen af de andre sprog, der er anf\xf8rt i beskrivelsesfeltet. Tak."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("Scandinavian History")}},"Open collection"))))),l.a.createElement(h.d,{isOpen:this.state.isModalOpen,toggle:this.closeCollectionModal,centered:!0,size:"lg"},l.a.createElement(h.f,{toggle:this.closeCollectionModal},this.state.collection.name),l.a.createElement(p,{books:this.state.collection.books,cart:this.props.cart,onCartUpdate:function(t){return e.props.onCartUpdate(t)},emptyResultString:"Collection result is empty!"}),l.a.createElement(h.e,null,l.a.createElement(h.a,{color:"secondary",onClick:this.closeCollectionModal},"Close"),l.a.createElement(h.a,{color:"danger",disabled:this.state.collection.books<=0,onClick:this.removeAllBooks},"Remove all"),l.a.createElement(h.a,{color:"primary",disabled:this.state.collection.books<=0,onClick:this.addAllBooks},"Add all"))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={cart:new Map,modal:!1,navItem:""},a.toggleCartModal=function(){a.setState({modal:!a.state.modal})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updateNavItem",value:function(e){this.setState({navItem:e})}},{key:"onCartUpdate",value:function(e){var t=this.state.cart;t.has(e.id)?t.delete(e.id):t.set(e.id,e),this.setState({cart:t})}},{key:"onCartAddAll",value:function(e){var t=!0,a=!1,n=void 0;try{for(var l,r=e[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var o=l.value,c=this.state.cart;c.set(o.id,o),this.setState({cart:c})}}catch(s){a=!0,n=s}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}},{key:"onCartRemoveAll",value:function(e){var t=!0,a=!1,n=void 0;try{for(var l,r=e[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var o=l.value,c=this.state.cart;c.delete(o.id),this.setState({cart:c})}}catch(s){a=!0,n=s}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color"},l.a.createElement(h.g,{className:"navbar-brand",to:"/",href:"/"},"Dongle Library"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"+(""===this.state.navItem?" active":"")},l.a.createElement(h.g,{className:"nav-link",to:"/",href:"/",onClick:function(){return e.updateNavItem("")}},"Home",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"+("/explore"===this.state.navItem?" active":"")},l.a.createElement(h.g,{className:"nav-link",to:"/explore",href:"/explore",onClick:function(){return e.updateNavItem("/explore")}},"Explore",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"+("/favorite"===this.state.navItem?" active":"")},l.a.createElement(h.g,{className:"nav-link",to:"/favorite",href:"/favorite",onClick:function(){return e.updateNavItem("/favorite")}},"Favorite",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("div",{className:"navbar-right"},l.a.createElement(h.b,null,l.a.createElement(h.a,{onClick:this.toggleCartModal},l.a.createElement(h.c,{icon:"shopping-cart",className:"mr-2"}),"Cart",l.a.createElement("span",{className:"badge badge-danger ml-2"},this.state.cart.size>100?"100+":this.state.cart.size)),l.a.createElement(h.d,{isOpen:this.state.modal,toggle:this.toggleCartModal,centered:!0,size:"lg"},l.a.createElement(h.f,{toggle:this.toggleCartModal},"Cart"),l.a.createElement(p,{books:Array.from(this.state.cart.values()),cart:this.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},emptyResultString:"Your cart is empty!"}),l.a.createElement(h.e,null,l.a.createElement(h.a,{color:"secondary",onClick:this.toggleCartModal},"Close"),l.a.createElement(h.a,{color:"primary",disabled:this.state.cart.size<=0},"Download Now"))))))),l.a.createElement(u.a,{exact:!0,path:["/","/front-end"],render:function(){return l.a.createElement(b,{cart:e.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},onCartAddAll:function(t){return e.onCartAddAll(t)},onCartRemoveAll:function(t){return e.onCartRemoveAll(t)}})}}),l.a.createElement(u.a,{exact:!0,path:"/explore",render:function(){return l.a.createElement(y,{cart:e.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},onCartAddAll:function(t){return e.onCartAddAll(t)},onCartRemoveAll:function(t){return e.onCartRemoveAll(t)}})}}),l.a.createElement(u.a,{exact:!0,path:"/favorite",render:function(){return l.a.createElement(k,{cart:e.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},onCartAddAll:function(t){return e.onCartAddAll(t)},onCartRemoveAll:function(t){return e.onCartRemoveAll(t)}})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(21);o.a.render(l.a.createElement(C.a,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.3dfaae04.chunk.js.map