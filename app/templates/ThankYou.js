function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink);
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink);
      default:
        return ('/');
    }
  }

export default function ThankYou({ pageData }) {
    let buttonLink = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <div className="four-o-four-section">
            <div className="four-o-four-box">
                <h1 className="four-o-four-title">{pageData.acf.hero_section.title}</h1>
                <p className="four-o-four-paragraph">{pageData.acf.hero_section.description}</p>
                <a href={buttonLink} className="four-o-four-button">{pageData.acf.hero_section.button.text}</a>
            </div>
        </div>
        </>
    )
}