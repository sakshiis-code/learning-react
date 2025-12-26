import React from 'react'
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/google-color.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$120k - $150k",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://pngdownload.io/wp-content/uploads/2023/12/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design-jpg.webp",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$180k - $220k",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full-Time",
      tag2: "In Office",
      pay: "$140k - $170k",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full-Time",
      tag2: "Remote",
      pay: "$160k - $200k",
      location: "Remote"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvwcAMtbDh5g19BPzv5RcG5rD1W47LBz1ew&s",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Flexible Schedule",
      pay: "$100/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$130k - $160k",
      location: "Noida, India"
    },
    {
      brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer – Web",
      tag1: "Full-Time",
      tag2: "In Office",
      pay: "$150k - $190k",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png",
      companyName: "IBM",
      datePosted: "2 months ago",
      post: "Cloud Application Developer",
      tag1: "Full-Time",
      tag2: "Hybrid",
      pay: "$110k - $140k",
      location: "Pune, India"
    },
    {
      brandLogo: "https://www.vhv.rs/dpng/d/453-4533338_oracle-logo-for-website-new-oracle-logo-png.png",
      companyName: "Oracle",
      datePosted: "3 days ago",
      post: "Java Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$100k - $130k",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/09/Adobe-logo-template-on-transparent-background-PNG.png",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "Frontend UI Developer",
      tag1: "Full-Time",
      tag2: "Remote",
      pay: "$140k - $175k",
      location: "Remote"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App