import React from 'react';
import ThumbnailService, { Image, imageData, ImageDetails } from '../../thumbnail.service';
import './thumbnail.css';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export interface state {
  isFetching: boolean;
  resImageData: imageData[];
}

export class Thumbnail extends React.Component<{},state>{

    imageData: imageData[] = [];
    images: ImageDetails[] = [];
    isInvoked = 0;

    constructor(props: any) {
        super(props);
        
        // initializing state
        this.state = {
          isFetching: false,
          resImageData: []
        };

        // binding handleSubmit method with this context
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      // invoking retrieveImages method
    componentDidMount()
    {
      this.isInvoked++;
      if(this.isInvoked === 1)
      {
        this.retrieveImages('hot', 'viral', 'day');
      }
        
    }

  
    // method to fetch images from api with defualt params
    retrieveImages (section: string, sort: string, wndow: string)
    {
        // updating the isFetching state true for showing loading animation
        this.setState({isFetching: true});
        
        // flushing the images array
        this.images.splice(0, this.images.length);

        // making api call
        ThumbnailService.retrieveAllThumbnails(section, sort, wndow).then((res: Image) => {
            
           // if data received and length is greater than zero
            if(res.data && res.data.data.length > 0)
                                            { 
                                              this.images = res.data.data;
                                              this.handleData(this.images);
                                            }
        }).catch((e: Error) => {
            console.log(e);
            this.setState({isFetching: false});
        });
    }

    // modifying received data and updating the state of resImageData
  handleData(images: ImageDetails[])
  {
    // flushing the imageData array
    this.imageData.splice(0,this.imageData.length);

    images  // filtering elements don't have images
          .filter(x => x.images_count > 0) 
          .map(y => 
                  {
                    y.images   // filtering elements containing only images of jpeg / png type
                            .filter(z => z.type === 'image/jpeg' || z.type === 'image/png')
                            .map(p => {
                              // modifying link url to load medium thumbnail images
                              p.link = this.getThumbnailUrl(p.link); 
                              // finally pushing elements to imageData Array for iterating in html template
                              this.imageData.push(p)  
                              //console.log(this.imageData)
                             
                            });
                  }                               
              );   
              
              // updating the state with fresh data
              this.setState({resImageData: this.imageData, isFetching: false});
              
  }
    
    // as per apidocs.imgr.com documentation modifiying url 
  // by appending letter 'm' to get thumbnails of medium size
  getThumbnailUrl(lnk: string)
  {
    if(lnk.endsWith('.jpg'))
    {
      const lnkArr = lnk.split('.jpg');
      return lnkArr[0]+'m.jpg';
    }
    else if(lnk.endsWith('.png'))
    {
      const lnkArr = lnk.split('.png');
      return lnkArr[0]+'m.png';
    }
    return '';
  }

  // capturing the form values
  handleSubmit(e: any)
  {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    section: { value: string };
    sort: { value: string };
    wndow: { value: string };
  };
  const section: string = target.section.value; // typechecks!
  const sort: string = target.sort.value; // typechecks!
  const wndow: string = target.wndow.value; // typechecks!
  
  // invoking the retrieveImages method with user selected filters
  this.retrieveImages(section, sort, wndow);
  }

    render() {
        return (
            <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
                     
                      <form id="filter" onSubmit={this.handleSubmit}>
                        
                      <label>Section:</label>
                    <select role="section" id="section" name="section" className="select-dropdown" >
                        <option value='hot'>Hot</option>
                        <option value='top'>Top</option>
                        <option value='user'>User</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label>Sort:</label>
                    <select role="sort" id="sort" name="sort" className="select-dropdown">
                        <option value='viral'>Viral</option>
                        <option value='top'>Top</option>
                        <option value='time'>Time</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label>Window:</label>
                    <select role="wndow" id="wndow" name="wndow" className="select-dropdown">
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="all">All</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="submit" variant="contained" disabled={this.state.isFetching}>Load Images</Button>
                    &nbsp;&nbsp;&nbsp;
                    Total images: {this.state.resImageData.length}
                </form>
                
                {
                  this.state.isFetching &&
                  <Box sx={{ width: '100%', height: '15%'}}>
                  <LinearProgress />
                </Box>
                }
              
                        <div className='container'>
                        
                        
                            {this.state.resImageData.map(x => 
                            <div className='imgBox'>
                            <img  src={x.link} alt="image"/>
                            <div className='bottomDescription'>{x.description}</div>
                            </div>
                            )}
                        
                            </div>
                </div>
        );
    }
    

    
}