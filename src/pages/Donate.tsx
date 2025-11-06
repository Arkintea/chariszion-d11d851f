import { CreditCard, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Donate = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Make a Difference Today
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your generous donation helps us continue our mission of spreading hope and changing lives. 
                Every contribution, no matter the size, makes a real impact in our community.
              </p>
            </div>

            <Card className="mb-8 shadow-2xl border-t-4 border-primary-500">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-primary-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary-500 p-3 rounded-full">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Bank Transfer Details</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Support our mission through direct bank transfer
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Account Name</p>
                  <p className="text-xl font-bold text-gray-800">Chariszion Smile Foundation</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Account Number</p>
                  <p className="text-xl font-bold text-gray-800">1234567890</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Bank Name</p>
                  <p className="text-xl font-bold text-gray-800">Your Bank Name</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-t-4 border-accent-500">
              <CardHeader className="bg-gradient-to-r from-accent-50 to-accent-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl">International Donations</CardTitle>
                </div>
                <CardDescription className="text-base">
                  For donations from outside Nigeria
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Contact us via email</p>
                  <a
                    href="mailto:contact@chariszionsmile.org"
                    className="text-xl font-bold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    contact@chariszionsmile.org
                  </a>
                </div>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Please email us for alternative donation methods and we'll be happy to assist you in 
                  supporting our cause.
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Thank You for Your Support!</h3>
              <p className="text-lg leading-relaxed">
                Your donation helps us provide meals, education, and hope to those who need it most. 
                Together, we're creating lasting change in our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
