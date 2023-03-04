import { notFound } from 'next/navigation';
import ThankYou from "../../../templates/ThankYou.js";
import About from "../../../templates/About.js";
import ServiceGeneral from "../../../templates/ServiceGeneral.js";
import Assets from "../../../templates/Assets.js";
import Contact from "../../../templates/Contact.js";
import ServiceDetails from "../../../templates/ServiceDetails.js";
import WrapAroundServices from "../../../templates/WrapAroundServices.js";
import OnLoadScripts from "../../../components/OnLoadScripts.js";

async function getAllPages() {
  const res = await fetch(`https://inside.rancoresponse.com/wp-json/pages/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(`https://inside.rancoresponse.com/wp-json/pages/all/${slug}`)
  if (!res.ok) {
    return notFound();
  } 
  else if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (!page.slug) return notFound();

  if (page.template == "templates/thank-you.php") {
    return (
      <>
        <ThankYou pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/about-us.php") {
    return (
      <>
        <About pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/service-general.php") {
    return (
      <>
        <ServiceGeneral pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/assets.php") {
    return (
      <>
        <Assets pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/contact-us.php") {
    return (
      <>
        <Contact pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/service-details.php") {
    return (
      <>
        <ServiceDetails pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/wrap-around-services.php") {
    return (
      <>
        <WrapAroundServices pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}