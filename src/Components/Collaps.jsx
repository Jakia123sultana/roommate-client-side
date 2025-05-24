export default function Collaps() {
  return (
    <>
        <div class="container mx-auto p-24 bg-[#F4F7FF] space-y-5 mt-24 rounded-2xl">
    <div class="collapse collapse-arrow border border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
      How do I list a room for rent?
      </div>
      <div class="collapse-content">
        <p>
          Simply sign in ,navigate to the Post Listing page,fill all information and then submit.
          </p>
      </div>
    </div>
    <div class="collapse collapse-arrow border  border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        Can I delete my listing?
      </div>
      <div class="collapse-content">
        <p>
         Yes! From the "My Listings" page.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow border  border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        Is my contact info safe? </div>
      <div class="collapse-content">
        <p>
        yes!
             </p>
      </div>
    </div>
    <div class="collapse collapse-arrow border  border-blue-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
      How do I report a bad listing?
      </div>
      <div class="collapse-content">
        <p>
         We implement it future.
        </p>
      </div>
    </div>
  </div>
    </>
  );
}