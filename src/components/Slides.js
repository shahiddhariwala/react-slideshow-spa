import React from "react";

class Slides extends React.Component {
  state = {
    currentIndex: 0,
    slides: this.props.slides,
    disableNext: false,
    disablePrev: true,
    disableRestart: true,
  };
  componentDidUpdate() {
    // Removed Comment
  }
  onClickNext = () => {
    if(this.state.currentIndex < this.state.slides.length-1)
    {
      const currentIndex = this.state.currentIndex + 1;
      this.setState({ currentIndex: currentIndex });
      if (this.state.slides.length === this.state.currentIndex - 1) {
        this.setState({ disableNext: true, disablePrev: false , disableRestart:false });
      } else {
        this.setState({ disableNext: false, disablePrev: false , disableRestart:false  });
      }
    }
    else{
      this.setState({ disableNext: true, disablePrev: false, disableRestart:false  });
    }
    
  };

  onClickPrev = () => {
    if (this.state.currentIndex >= 0) {
      const currentIndex = this.state.currentIndex - 1;
      
      if (currentIndex === 0) {
        this.setState({ currentIndex: 0 });
        this.setState({ disablePrev: true, disableNext: false,disableRestart:true });
      } else {
        this.setState({ currentIndex: currentIndex });
        this.setState({ disablePrev: false, disableNext: false,disableRestart:false  });
      }
    }
  };

  onClickRestart = () => {
    this.setState({ currentIndex: 0, disablePrev: true, disableNext: false, disableRestart: true});
  };
  render() {
    const slide = ( <div id="slide">
    <h1 data-testid="title">{this.state.slides[this.state.currentIndex]['title']}</h1>
    <p data-testid="text">{this.state.slides[this.state.currentIndex]['text']}</p>
  </div>);
    return (
      <div>
        <div id="navigation">
          <button
            data-testid="button-restart"
            disabled={this.state.disableRestart}
            onClick={this.onClickRestart}
          >
            Restart
          </button>
          <button
            data-testid="button-prev"
            disabled={this.state.disablePrev}
            onClick={this.onClickPrev}
          >
            Prev
          </button>
          <button
            data-testid="button-next"
            disabled={this.state.disableNext}
            onClick={this.onClickNext}
          >
            Next
          </button>
        </div>
        {slide}
      </div>
    );
  }
}

export default Slides;
