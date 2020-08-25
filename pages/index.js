import Card from "components/Card";

export default function Home() {
    return (
        <div className="pb-56">
            <div className="container mx-auto px-4 antialiased">
                <header className="py-6 border-b mb-12">
                    <h1 className="text-4xl font-extrabold leading-10 mb-4 text-gray-900">
                        Get your Kemper Profiling Amp
                    </h1>
                    <p className="text-lg text-gray-500">
                        All your favorite amps and effects, together in one
                        little box.
                    </p>
                </header>
                <div className="lg:flex lg:gap-8">
                    <div className="relative -mt-8 mb-8 lg:mb-0 lg:flex-1">
                        <div className="sticky top-0 pt-8">
                            <div className="border rounded-md overflow-hidden mb-4">
                                <img
                                    src="/head-black_front.png"
                                    className="w-full"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Card active>
                                    <img
                                        src="/head-black_front.png"
                                        className="w-full"
                                    />
                                </Card>
                                <Card>
                                    <img
                                        src="/head-black_front.png"
                                        className="w-full"
                                    />
                                </Card>
                                <Card>
                                    <img
                                        src="/head-black_front.png"
                                        className="w-full"
                                    />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <span className="font-medium text-gray-500">
                            Starting at
                        </span>
                        <h2 className="text-5xl leading-tight font-extrabold text-gray-900 mb-4">
                            $1,799
                        </h2>
                        <p className="text-gray-900 text-lg mb-4">
                            The KEMPER PROFILER™ is the leading-edge digital
                            guitar amplifier and all-in-one effects processor.
                        </p>
                        <div className="text-gray-500 mb-8">
                            <p className="mb-4">
                                Hailed as a game-changer by guitarists the world
                                over, the PROFILER™ is the first digital guitar
                                amp to really nail the full and dynamic sound of
                                a guitar or bass amp.
                            </p>
                            <p>
                                This is made possible by a radical, patented
                                technology and concept which we call
                                "PROFILING".
                            </p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-gray-900 font-medium text-xl mb-3">
                                Form factor
                            </h3>
                            <div className="flex flex-col lg:flex-row gap-y-4 gap-4">
                                <Card className="flex-1 p-5" active>
                                    <h3 className="text-gray-900 mb-2">
                                        Profiler Head
                                    </h3>
                                    <p className="text-gray-500">
                                        Compact amplifier head, perfect for a
                                        speaker cabinet or desk.
                                    </p>
                                </Card>
                                <Card className="flex-1 p-5">
                                    <h3 className="text-gray-900 mb-2">
                                        Profiler Rack
                                    </h3>
                                    <p className="text-gray-500">
                                        3U rackmount version of the classic
                                        profiling amplifier.
                                    </p>
                                </Card>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-gray-900 font-medium text-xl mb-3">
                                Power Amp
                            </h3>
                            <div className="flex flex-col gap-y-4">
                                <Card className="flex-1 p-5" active>
                                    <h3 className="text-gray-900 mb-2">None</h3>
                                    <p className="text-gray-500">
                                        Compact amplifier head, perfect for a
                                        speaker cabinet or desk.
                                    </p>
                                </Card>
                                <Card className="flex flex-1 items-center justify-between p-5">
                                    <div>
                                        <h3 className="text-gray-900 mb-2">
                                            Powered
                                        </h3>
                                        <p className="text-gray-500">
                                            Built-in 600W solid state power amp.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-gray-900">
                                            + $449
                                        </span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-gray-900 font-medium text-xl mb-3">
                                Foot Controller
                            </h3>
                            <div className="flex flex-col gap-y-4">
                                <Card className="flex-1 p-5" active>
                                    <h3 className="text-gray-900">None</h3>
                                </Card>
                                <Card className="flex flex-1 items-center justify-between p-5">
                                    <div>
                                        <h3 className="text-gray-900">
                                            Profiler Remote Foot Controller
                                        </h3>
                                    </div>
                                    <div>
                                        <span className="text-gray-900">
                                            + $449
                                        </span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-gray-900 font-medium text-xl mb-3">
                                Specifications
                            </h3>
                            <div className="text-gray-900">
                                <div className="flex justify-between border-gray-200 border-t border-b py-4">
                                    <div>
                                        <span className="font-semibold">Amp Models</span>
                                    </div>
                                    <div className="text-right">
                                        <span>200</span>
                                    </div>
                                </div>
                                <div className="flex justify-between border-gray-200 border-b py-4">
                                    <div>
                                        <span className="font-semibold">Amp Models</span>
                                    </div>
                                    <div className="text-right">
                                        <span>200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="fixed bottom-0 bg-gray-100 border-t w-full">
                <div className="container px-4 mx-auto py-6">
                    <div className="sm:flex sm:items-center">
                        <div className="hidden sm:flex sm:flex-col sm:gap-y-4 lg:flex-1 lg:flex-row">
                            <div className="flex lg:flex-1 gap-3">
                                <div>
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="globe w-6 h-6 text-gray-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-gray-900 text-sm font-medium lg:mb-2">
                                        Free Shipping
                                    </h3>
                                    <p className="hidden lg:block text-gray-500 text-sm">
                                        Compact amplifier head, perfect for a
                                        speaker cabinet or desk.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-3">
                                <div>
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="shield-check w-6 h-6 text-gray-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-gray-900 text-sm font-medium lg:mb-2">
                                        2 Year Warranty
                                    </h3>
                                    <p className="hidden lg:block text-gray-500 text-sm">
                                        Compact amplifier head, perfect for a
                                        speaker cabinet or desk.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center gap-6 justify-end">
                            <div className="text-right">
                                <h2 className="text-3xl leading-tight font-bold text-gray-900 mb-1">
                                    $1,799
                                </h2>
                                <span className="text-gray-500 hidden sm:block">
                                    Need financing?{" "}
                                    <a href="#" className="underline">
                                        Learn more
                                    </a>
                                    .
                                </span>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="rounded-md text-white font-medium bg-black py-3 px-6 hover:bg-gray-700 focus:shadow-md"
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
