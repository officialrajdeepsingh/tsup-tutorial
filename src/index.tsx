import type {headerProps} from "./types"

export function Header(props:headerProps) {

    const {logo,navItem}= props

    return ( 

            <header className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{logo}</span>
                        </a>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {
                            navItem.map(
                                item=> <li>
                                <a href={item.url} className="mr-4 hover:underline md:mr-6 ">{item.name}</a>
                            </li>
                            )
                        }
                            
                        
                        </ul>
                    </div>
                </div>
            </header>


    );
}


export function Footer(props) {

    const {copyrightText}= props

    return ( 

            <Footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400" dangerouslySetInnerHTML={{__html: copyrightText}}>

                        {copyrightText}
                        
                        </span>
                </div>
            </Footer>

 
    );
}