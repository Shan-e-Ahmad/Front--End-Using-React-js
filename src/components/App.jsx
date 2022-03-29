import React from 'react';
import Pagination from './Pagination';

class App extends React.Component {
    
    constructor() {
        
        super();
        
        const people = [
            { 
            id: 1, 
            heading: 'CONVERSION OF PDF INTO A WORD ',
            description:'We would like to convert PDF into a WORD',
            price:'$20-$169',
            bid:'0 bids',
            skills:'Copy Typing   Data Entry Excel   PDF   Word',
            duration:'6 days left' 
            
            },
            { 
                id: 2, 
                heading: 'Web Traffic',
                description:'I need a professional to drive traffic to my website.',
                price:'$120 avg bid',
                bid:'1 bids',
                skills:' SEO, Internet Marketing, Link Building, Marketing, PHP' ,
                duration:'' 
                },
                { 
                    id: 3, 
                    heading: 'CONVERSION OF PDF INTO A WORD 3',
                    description:'We would like to convert PDF into a WORD',
                    price:'$20-$169',
                    bid:'0',
                    skills:'Copy Typing Data Entry' ,
                    duration:'9 days left' 
                    },
                    { 
            id: 4, 
            heading: 'CONVERSION OF PDF INTO A WORD',
            description:'We would like to convert PDF into a WORD',
            price:'$20-$169',
            bid:'0',
            skills:'Copy Typing Data Entry',
            duration:'6 days left'  
            },
            { 
                id: 5, 
                heading: 'CONVERSION OF PDF INTO A WORD ',
                description:'We would like to convert PDF into a WORD',
                price:'$20-$169',
                bid:'0 bids',
                skills:'Copy Typing   Data Entry Excel   PDF   Word',
                duration:'6 days left' 
                
                },
                { 
                    id: 6, 
                    heading: 'CONVERSION OF PDF INTO A WORD ',
                    description:'We would like to convert PDF into a WORD',
                    price:'$20-$169',
                    bid:'0 bids',
                    skills:'Copy Typing   Data Entry Excel   PDF   Word',
                    duration:'6 days left' 
                    
                    },
                    { 
                        id: 7, 
                        heading: 'CONVERSION OF PDF INTO A WORD ',
                        description:'We would like to convert PDF into a WORD',
                        price:'$20-$169',
                        bid:'0 bids',
                        skills:'Copy Typing   Data Entry Excel   PDF   Word',
                        duration:'6 days left' 
                        
                        },
                        { 
                            id: 8, 
                            heading: 'CONVERSION OF PDF INTO A WORD ',
                            description:'We would like to convert PDF into a WORD',
                            price:'$20-$169',
                            bid:'0 bids',
                            skills:'Copy Typing   Data Entry Excel   PDF   Word',
                            duration:'6 days left' 
                            
                            },
                            { 
                                id: 9, 
                                heading: 'CONVERSION OF PDF INTO A WORD ',
                                description:'We would like to convert PDF into a WORD',
                                price:'$20-$169',
                                bid:'0 bids',
                                skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                duration:'6 days left' 
                                
                                },
                                { 
                                    id: 10, 
                                    heading: 'CONVERSION OF PDF INTO A WORD ',
                                    description:'We would like to convert PDF into a WORD',
                                    price:'$20-$169',
                                    bid:'0 bids',
                                    skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                    duration:'6 days left' 
                                    
                                    },
                                    { 
                                        id: 11, 
                                        heading: 'CONVERSION OF PDF INTO A WORD ',
                                        description:'We would like to convert PDF into a WORD',
                                        price:'$20-$169',
                                        bid:'0 bids',
                                        skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                        duration:'6 days left' 
                                        
                                        },
                                        { 
                                            id: 12, 
                                            heading: 'CONVERSION OF PDF INTO A WORD ',
                                            description:'We would like to convert PDF into a WORD',
                                            price:'$20-$169',
                                            bid:'0 bids',
                                            skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                            duration:'6 days left' 
                                            
                                            },
                                            { 
                                                id: 13, 
                                                heading: 'CONVERSION OF PDF INTO A WORD ',
                                                description:'We would like to convert PDF into a WORD',
                                                price:'$20-$169',
                                                bid:'0 bids',
                                                skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                duration:'6 days left' 
                                                
                                                },
                                                { 
                                                    id: 14, 
                                                    heading: 'CONVERSION OF PDF INTO A WORD ',
                                                    description:'We would like to convert PDF into a WORD',
                                                    price:'$20-$169',
                                                    bid:'0 bids',
                                                    skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                    duration:'6 days left' 
                                                    
                                                    },
                                                    { 
                                                        id: 15, 
                                                        heading: 'CONVERSION OF PDF INTO A WORD ',
                                                        description:'We would like to convert PDF into a WORD',
                                                        price:'$20-$169',
                                                        bid:'0 bids',
                                                        skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                        duration:'6 days left' 
                                                        
                                                        },
                                                        { 
                                                            id: 16, 
                                                            heading: 'CONVERSION OF PDF INTO A WORD ',
                                                            description:'We would like to convert PDF into a WORD',
                                                            price:'$20-$169',
                                                            bid:'0 bids',
                                                            skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                            duration:'6 days left' 
                                                            
                                                            },
                                                            { 
                                                                id: 17, 
                                                                heading: 'CONVERSION OF PDF INTO A WORD ',
                                                                description:'We would like to convert PDF into a WORD',
                                                                price:'$20-$169',
                                                                bid:'0 bids',
                                                                skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                                duration:'6 days left' 
                                                                
                                                                },
                                                                { 
                                                                    id: 18, 
                                                                    heading: 'CONVERSION OF PDF INTO A WORD ',
                                                                    description:'We would like to convert PDF into a WORD',
                                                                    price:'$20-$169',
                                                                    bid:'0 bids',
                                                                    skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                                    duration:'6 days left' 
                                                                    
                                                                    },
                                                                    { 
                                                                        id: 19, 
                                                                        heading: 'CONVERSION OF PDF INTO A WORD ',
                                                                        description:'We would like to convert PDF into a WORD',
                                                                        price:'$20-$169',
                                                                        bid:'0 bids',
                                                                        skills:'Copy Typing   Data Entry Excel   PDF   Word',
                                                                        duration:'6 days left' 
                                                                        
                                                                        }
          ];
        // an example array of items to be paged
        var exampleItems = people.map(i => (
            { 
                id: i.id, 
                heading: i.heading,
                description:i.description,
                price:i.price,
                bid:i.bid,
                skills:i.skills,
                duration:i.duration
            }
            ));
      
         
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

       
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
       
        this.setState({ pageOfItems: pageOfItems });
    }
    

    render() {
        const mystyle = {
            color: "#0E1724",
            position:"relative",
           left: " 500px",
           top:" -80px",
            fontSize: "20px",
            fontFamily: "Roboto"
          };
          const mystyle1 = {
            color: "#0E1724",
           
         
            fontSize: "20px",
            fontFamily: "sans-sarif"
          };
          const mystyle2 = {
           position:"relative",
           left:"10px",
            fontFamily: "sans-sarif"
          };
          const mystyle3 = {
            
            position:"relative",
            top:" 15px",
            right:"76px",          
            fontSize:"14px",
            fontFamily: "Roboto"
          };
          const mystyle4 = {
            
            position:"relative",
            top:" 15px",
            right:"80px",          
            fontSize:"14px",
            fontFamily: "Roboto",
            color:"blue"
          };
          const mystyle5 = {
            color: "#0E1724",
            position:"relative",
           left: " 500px",
           top:" -80px",
            fontSize: "16px",
            fontFamily: "Roboto",
            background:"green",
            color:" white"
          };
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>
                            <div className="credits text-center"n>
                    <div>                 

                        
                        
                            <a style={mystyle1}  href=" " data-qtsb-section="page-job-search-new" data-qtsb-subsection="card-job" data-qtsb-label="link-project-title" data-heading-link="true">
                            {item.heading}
                            </a>
                        

                        <span style={mystyle2}>{item.duration}</span>

                        
                    </div>

                    <p style={mystyle3} >
                    {item.description}
                    </p>

                    <a style={mystyle4} href=" " data-qtsb-section="page-job-search-new" data-qtsb-subsection="card-job" data-qtsb-label="link-skill">
                        
                    {item.skills}
                        
                    </a>
                  
                        
                            <div style={mystyle}>
                            
                            
                            {item.price}
                            
                            </div>
                            <div style={mystyle}>
                                 
                                { item.bid}
                            </div>
                            <div >
                        <button style={mystyle5}>Bid Now </button>
                        </div>
                  
                        <hr />
                    
                </div> </div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
               
                <div className="credits text-center">
                    
                </div>
            </div>
            
        );
    }
}

export default App;