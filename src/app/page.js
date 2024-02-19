import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="flex flex-col gap-4 max-w-md mx-auto mt-4 text-gray-500">
          <p>
            Aliqua qui duis exercitation laborum sit non. Minim amet esse
            occaecat incididunt ad. Nisi aliqua magna aliqua tempor deserunt.
            Cupidatat officia fugiat laboris culpa adipisicing qui ipsum anim
            amet occaecat magna aliquip esse.
          </p>
          <p>
            Amet adipisicing reprehenderit et irure enim voluptate deserunt
            velit eu pariatur. Sunt ipsum consequat voluptate sit. Ipsum laboris
            sunt dolore et ea irure est nostrud ut incididunt sunt. Excepteur
            reprehenderit culpa irure ipsum laborum nisi magna. Nisi nulla
            voluptate qui reprehenderit. Reprehenderit minim sunt ad irure
            commodo do minim nulla.
          </p>
          <p>
            Minim nulla non eiusmod ex eu. Deserunt dolor ut exercitation
            pariatur elit cillum. Mollit laborum nisi id enim fugiat proident
            qui. Cupidatat laboris commodo minim veniam ad aliqua nulla eu quis
            in eiusmod. Labore sint esse sint duis reprehenderit mollit laborum.
            Eu aliqua laboris mollit dolore proident dolor dolor id adipisicing
            ad Lorem nostrud.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            href="tel:+62123123123"
            className="text-4xl underline text-gray-500"
          >
            +62 123 123 123
          </a>
        </div>
      </section>
    </>
  );
}
