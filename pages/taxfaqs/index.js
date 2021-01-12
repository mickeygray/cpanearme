import StickyNavbar from "../../components/StickyNavbar"

import BlogItem from "../../components/BlogItem"
import {useState} from "react"
const TaxFaqs = () => {

const [blogs] = useState([
    {
    title: "State Tax Changes For 2021",
    date: "1/11/2020",
    img1:"/StateTaxChanges1.jpg",
    img2:"/StateTaxChanges2.jpg",
    img3:"/StateTaxChanges3.jpg",
    p1:"<p> With November’s elections came broad sweeping tax changes across multiple states. Take note that some of these may not begin in 2021, so please check with your State Taxing Authority to verify how these tax changes affect you.</p>",
    p2:`<h3> At A Glance: </h3>
        <ul>
        <li> 1)Arkansas and Iowa have lowered their corporate income tax rate. </li>
        <li> 2)Arizona and New Mexico raised their top marginal individual income tax rate adding a new bracket. </li>
        <li> 3)Arkansas reduced its top marginal income tax rate by removing the top tax bracket. </li>
        <li> 4)Tennessee has voided the Hall tax effectively ending income tax levies in the state. </li> 
        <li> 5)Arizona and Illinois adjusted policy relating to sales and use tax for remote sellers. </li>
        <li> 6)Connecticut, Vermont and D.C. adjusted their estate tax exemptions and/or rates. </li>
        <li> 7)Connecticut has begun the phase out of a capital stock tax, while Illinois and Mississippi have escalated their phase out to the next stage and New York has completely phased out theirs. </li>
        <li> 8)Colorado and Oregon increased taxes on cigarettes. Colorado Oregon and Georgia have begun taxing vape products. </li>
        <li> 9)Arizona, Montana and New Jersey legalized marijuana and took steps to set up the taxing structure.</li>
        <li> 10)North Carolina undid legislation to stop a reduction of the fuel tax.</li>`,
    p3:"<p> Some of these changes may not come into effect until the fiscal year for 2021 which for most states is July. There are several that are implemented on January 1st. </p>",
    p4:"<p> Bear in mind the plurality of these instances are tax changes that were set to take effect in 2021 but had been passed in prior legislative sessions as there were a lot of state legislative sessions cut short due to Covid-19. Though ther were significant changes passed in the ballot box in November, notably adding three more states that are now taxing legal marijuana. </p>",
    p5:"<p> In addition, many states’ unemployment insurance (UI) tax rates will automatically increase in 2021 due to the size of trust fund drawdown due to the pandemic. Many states also updated their legislation to align with the  significant changes in the federal tax code that were made by the Coronavirus Aid, Relief, and Economic Security (CARES) Act that was enacted in March 2020.</p>"
    },
    {
     title:"Arkansas May Soon Eliminate the Income Tax",
     img1:"/arkansas1.jpg",
     date: "1/11/2020",
     img2:"/arkansas2.jpg",
     img3:"/arkansas3.jpg",
     p1:"<p> Upon taking his seat as the Lieutenant Governor of Arkansas Tim Griffin - R recently announced a long term initiative to eliminate the income tax in the state of arkansas. It would join a hand full of states that currently have no personal income tax including Texas and Florida. While he did not list a series of plan to outline how this would happen, he noted it was important to the administration that the process begin with this legislative session.</p>",
     p2:"<p> He states a desire to incentivize growth by making the tax code more competitive. Currently rated near the bottom at number 45 in the 2021 State Business Tax Climate Index, the state can do a lot to improve to rate of business growth to the state.  The process of eliminating an income tax is incredibly complicated though, so the state is carefully navigating the early stages of this process by ensuring all planning is done prior to implementation.</p>",
     p3:"<p> Something unique about the income tax code in the state of Arkansas is that instead of having different brackets for levels of income, the state has three different rate schedules that apply to total income. With a base of 3.4 percent on income above $22,200  that increases for Income above 37,200 to 5.9 percent and finally earners above 79,300 have a rate of 6.6%.</p>",
     p4:"<p> It is a complicated system and has a top marginal rate that is significantly higher than its neighbors.  Though this does mark an improvement overall in 2020 the top rates were 6.9 percent so a modest decrease in this legislative session. Income tax revenue in the state of Arkansas attributes 28 percent of the total revenue in terms of state tax collection. While this is a large amount of money, its not insurmountable as their neighbor Mississippi has put together a plan to eliminate both corporate and individual income taxes, though with less of a budgetary effect. So the long term implications and exact necessary revenue that is constituted by that 28 percent remains to be seen.</p>",
     p5:"<p> They are bracing for a long haul on this project by implementing a slow chain of revenue triggers. Basically, the state would schedule incremental rate reductions for certain thresholds. This allows for adjustments to meet budgetary constraints.  Even with these triggers though means that they will have to deal with getting income elsewhere and with a staggering state and local sales tax rate of 9.53 percent (the second highest in the nation)  there is not a lot of wiggle room to make up the income. There are several remedies stopping short of complete income tax removal including a simplification of the three tier system.  The necessary steps will require a lot of legislative work and during a pandemic large financial changes in the sales tax could be detrimental to the lowest income and unemployed. That being said it is still being viewed as a commendable long term effort that may yet improve the bottom line of the average person from Arkansas and overall attract more small to medium businesses to open in and around the state.</p>"
    },{
     title:"Dealing with Self Employment Tax with the New Cares Act",
     img1:"/cares1.jpg",
     img2:"/cares2.jpg",
     date: "1/11/2020",
     img3:"/cares3.jpg",
     p1:"<p> Irrespective of one’s employment situation the plurality of Americans were greatly affected by the economic downturn caused by the coronavirus. The number of small businesses that have been forced to close is staggering and the number grows everyday.  Further those who have managed to survive do so at the detriment of their employees leaving massive income tax bills for the self employed that are now requiring attention lest a large portion of Americans continue to struggle.</p>",
     p2:"<p> Fortunately the CARES act has legislation set to apply relief for those with high self employment tax bills, including the option to completely defer payments. While this will provide an immediate windfall in the coming months as tax bills become due again in April, it is not without some pitfalls. Here are some guidelines for those with self employment taxes who seek to defer using CARES legislation as their guidelines.</p>",
     p3:"<p> To be certain there are only specific types of taxes allowed to be deferred in this initiative so before beginning down the path of planning to not pay taxes in the immediate future be certain that you are intending to defer payment on the right type of taxes.  According to the IRS, ““self-employed individuals may defer the payment of 50 percent of the Social Security tax imposed under section 1401(a) of the Internal Revenue Code on net earnings from self-employment income for the period beginning on March 27, 2020 and ending December 31, 2020.”</p>",
     p4:`<p> However, the deferred payments must still be made by the deadlines that are applicable to all who chose to elect to defer their taxes.  To avoid a penalty please be sure to strictly adhere to the following guidelines:
        <ul>
        <li> On December 31, 2021, 50 percent of the eligible deferred amount; and </li>
        <li> On December 31, 2022, the remaining amount. </li>
        </ul>
        <p>Looking at a bottom line example, take some real numbers. Let’s say you owe 10,000 in SSI tax for the period from 3/27/2020 to 12/31/2020. That means your total necessary tax payments are 5,000 dollars by the end of this year and the other half by the end of 2022. 
        Obviously there is no cap on the amount you’re allowed to pay back before the end of 2021, but there is a minimum of 50 percent to avoid a late payment penalty. </p>`, 
     p5:`<h3> So should I defer payments if I am self employed? </h3>
        <p> While the immediate crunch of the last few months and an impending tax bill may make this a tempting offer, there are a number of considerations you should make including being prepared for a larger tax bill in 2022 and not compounding a problem by kicking a can down the road that you can’t afford at all. If for instance you were to make no payments at all through the early part of 2021 you stand to see a significant amount of money owed to the federal government in 2022 and 2023 so if you predict a stagnant growth depending on your industry, bear in mind the risk and reward of gritting your teeth and bearing it. </p>
        <p>Even with additional aid on the way for small businesses and self-employed, it will definitely not be more than a stop gap with a large bill awaiting those who will eventually come to pay everything they owe the IRS. Though if you simply cannot afford to pay right now due to direct hardship from the coronavirus you can defer up to 50 percent of your required share of SSI payments. Keep a record of your payments should you decide to defer to avoid further problems.</p>`    
    },
    {
        title:"How To Pay Taxes on Your Stock Purchases in 2021",
        img1:"/stocks1.jpg",
        date: "1/11/2020",
        img2:"/stocks2.jpg",
        img3:"/stocks3.jpg",
        p1:"<h3> Did you buy stocks for the first time in 2020? </h3> <p> Be sure to read here to learn the ins and outs of reporting capital gains and losses from any stock transactions. While this was an historic year in the stock market and a great year to enter for folks who previously couldn’t afford to buy in any significant way, it exposes an entire new generation of taxpayers to the risks for underpaying on capital gains and ending up with a heavy tax bill in the following years.</p>",
        p2:"<p>Firstly, pat yourself on the back if you managed to make a significant investment in the stock market for the first time this year, it’s a big step in diversifying your money and having an easier transition to retirement from your career. But, take time to read guides and speak to tax professionals before filing a tax return if you bought or sold stocks for the first time.</p>",
        p3:`<p>To keep it simple, if you sold investment in 2020, you may need to pay taxes equal to the gains from the sale. Capital gains is a simple calculation, selling price - purchase price. </p>
            <p>Once you have a number that represents your capital gains, how much you owe is contingent on a number of factors. First and foremost  you have to classify your holding as either long term or short term. If you held the asset for less than a year it qualifies as a short term holding and may be taxable at a rate of up to 37 percent of the capital gains depending on your overall individual tax bracket.  Many new investors should be wary of these as many probably purchased and sold a lot of newly acquired assets during the tumult of the stock market in April and May.  Contrarily long term holdings are taxed at a rate of 20, 15 or even not at all.</p>`,
        p4:`<p>If you were among some of the more fortunate who didn’t have to dip into their savings, you may not owe any capital gains, be certain that you will probably have taxes owed for dividends and interest. If you own stocks or index funds, the dividends you periodically receive either as interest or a bond will need to be reported and you will have to pay taxes on it.</p> 
            <p>Here are some tips for reporting stocks and investments on your tax return. To start you must ensure you have all the necessary documents at the time of filing, primarily the 1099-DIV to report dividends from companies you are invested in and a 1099-B which is for reporting capital gains through the year.</p>`,
        p5:`<p>When filing multi form tax returns it’s best to have a CPA assist to prevent errors that will cause you to owe more than you are already paying. Be sure to visit CPANearMe.com to find local and nationally rated tax cpas that serve your area.</p> 
            <p>As you continue to invest, it’s likely your taxes will continue to increase. To avoid paying even more in taxes, you may want to consider a tax-free investment vessel, such as a 401(k), Roth IRA, regular IRA, or a health savings account.</p>`    
    },
    {
        title:"What Is An Offer In Compromise?",
        img1:"/oic1.jpg",
        date: "1/11/2020",
        img2:"/oic2.jpg",
        img3:"/oic3.jpg",
        p1:`<p> Are friends and family telling you to file an <b>‘offer in compromise’</b> to reduce your tax debt? Do
            you keep putting it off because you don’t know an <b>‘offer in compromise’</b> is? Simply put, it’s an
            IRS program that allows you to settle your tax debt for less than what you owe.</p> <p> Once you’ve
            paid the amount agreed on, your entire tax debt goes away, even though you didn’t pay all of it.
            Sounds too good to be true, right? Here’s what you really need to know about getting an offer in
            compromise before you go calling the IRS, because it’s never that easy.</p>`,
        p2:`<p>First of all, you have to qualify for this program. And to do that, you have to have filed all your
            recent federal taxes. Nor can you be in bankruptcy. Even if you decide you can still qualify for
            this program, the application requires a number of confusing forms, a $186 application fee, and
            an initial payment.</p> <p>That’s right, your application alone for this program requires you to send a
            down payment. Guess what, neither the application fee nor the down payment are refundable,
            whether your application is approved or not. If your application is accepted, then good news,
            that down payment is applied towards the amount agreed upon.</p> <p>If your application is rejected,
            they’re still keeping your down payment. This down payment can be as much as 20% of the
            amount agreed upon. Don’t worry though, you can file an appeal if your offer is rejected within
            30 days of the decision.</p>`,
         p3:`<p>So you’ve submitted your offer, application fee and down payment--now what? While you’re
            waiting to hear back, the IRS can do a number of things. First of all, it can take up to two years
            to review your application and render a decision. </p>  <p>Next, it can file a ‘Notice of Federal Tax Lien,’
            which means the government can make a legal claim against your property in the amount of
            your full tax debt. You can file an appeal once you receive this notice, but good luck with that. </p>
            <p> Even while your application is being reviewed, you must continue to make your payments
            towards the tax debt. You can choose to make a 20% down payment when you submit your
            application, or you can choose to make periodic monthly payments in equal amounts until the
            debt is paid.</p> <p> A separate ‘Low Income Certification’ does exist for those who cannot afford the
            application fee. Those who meet these guidelines also do not have to submit an initial payment,
            nor do they have to make payments while their application is being reviewed. The IRS does not
            grant this certification to a great many people.</p>`,
         p4:`<p>If you’ve been waiting for more than two years for your decision, then congrats! Your
            application is automatically accepted if it takes the IRS more than two years to get back to you.
            If this is the case, then any refunds due within the calendar year in which your offer is accepted
            will also be applied to your tax debt.</p> <p> <b>If a Federal Tax Lien was filed against you, that claim
            against your property will not be released until your agreed upon amount is fully paid.</b> </p>`,
          p5:`<p>If your application and appeals are ultimately rejected, then fear not, there are a number of other
              state and federal programs that can help reduce your amount of tax debt. Click here for more
              information.</p>`          
    },
    {
      title: "What is a Penalty Abatement?",
      img1:"/penalty1.jpg",
      date: "1/11/2020",
      img2:"/penalty2.jpg",
      img3:"/penalty3.jpg",
      p1:`<p>If you have a tax debt that you cannot pay due to circumstances outside your control, is there
            anything you can do about it? You can try to get a Penalty Abatement from the IRS. This only
            applies to certain people in certain situations, but it’s your best bet if this is the first time you’ve
            been unable to pay federal taxes.</p>`,
      p2:`<p>There are two different types of penalty abatements--reasonable cause, and first-time. Here are
            the requirements to qualify for a first-time penalty abatement:</p>
          <ul>
          <li> Clean history of paying taxes in full and on time for the previous three years. </li>
          <li> Filed all currently required returns or filed an extension. </li>
          <li> You have paid, or arranged to pay, any tax due. </li>
          </ul>
          <p>The first time penalty abatement only clears you from one tax period, and you still have to pay
            any back taxes you owe outside of this abatement period. This is an underused option for
            first-time [offenders], and can be a great way to make up for a mistake, or to buy more time to
            get back on track with paying your taxes on time. For first-timers, you will get an instant
            decision if you call the IRS and request the abatement directly. If you write to them, the      
            decision will take between two and three months</p>`,
        p3:`<p>The other type of penalty abatement is the reasonable cause. This option is a little more
                complicated, but can be used if you aren’t a first-timer. To apply for this type of abatement,
                you’ll need to write to the IRS and explain the following</p>          
            <ul>
            <li>The type of penalty you want removed</li>
            <li>The events and specific facts and circumstances of your situation, and explain how
                these events were outside of your control</li>
             <li>Attach documents that will prove your case</li>   
            </ul>
            <p>Once received, the IRS will review your case and evidence, and make a decision within three or
              four months. They will consider the effort you made to pay your taxes in the period for which
              you’re penalized, and your prior history of paying on time.
            </p>
            `,
          p4:`<p>This can be a good alternative when your financial situation isn’t where you’d like it to be, due to
                things outside your control. This option is especially useful if a natural disaster like a flood, fire
                or hurricane has damaged or destroyed your home. Even if you have insurance, there are still
                other costs associated with losing or repairing damage to your home that add up quickly. Those
                can be anything from hotel bills to lost wages from time away from work. Another positive is that
                you will have plenty of documentation of a natural disaster, even if you don’t have proper
                homeowner’s insurance.</p>`,
          p5:`<p>If your situation is something besides a natural disaster, there are still other ways in which you
                can prove to the IRS that you can’t pay because of something that’s not your fault.</p>`        
    },
    {
        title:"What is a Direct Debit Installment Agreement?",
        img1:"/ddia1.jpg",
        img2:"/ddia2.jpg",
        date: "1/11/2020",
        img3:"/ddia3.jpg",
        p1:`<p>A direct debit installment agreement is basically ‘autopay’ for your tax payments. It’s fairly easy
            to set up online, because the IRS does not want you to miss your payments! This agreement
            allows you to set up equal monthly installments that come out of your bank account
            automatically until your entire agreed-upon payment has been paid.</p>`,
        p2:`<p>The main benefit of this program is that you have a definite start and end date for your payment
            plan. This means that your interest doesn’t compound as the months go by. The agreement
            basically freezes your interest amount throughout the entire length of your payment plan, so
            you’re not paying any additional interest as you make your monthly payments.</p>`,
        p3:`<p>The other benefit of this program is that you never miss a payment, and your payments are
            never late. It’s a really great option if you or your business owes less than $25,000. No more
            remembering to mail payments, and no more payments getting lost in the mail! The only real
            drawback to this option is that you have to keep enough funds in your account to avoid any
            insufficient funds penalties from your bank. I highly recommend setting up this payment plan
            online, because the setup fee is only $31, as opposed to a $107 setup fee if you set it up over
            the phone.</p>`,
        p4:`<p>Now regardless of the amount you owe the IRS, they can place a lien on your credit. A lien is
            the government’s claim on your property for the amount of taxes you owe. This can bring your
            credit score way down, and affect your ability to get a loan or a mortgage. The good news is
            that if you owe less than $25,000, you can request the IRS to remove the lien from your credit
            after three months of direct debit installment payments. If you owe more than $25,000, you may
            or may not have a lien placed on your credit at all, so long as you are making your payments via
            direct debit, or through payroll deduction.</p>`,
        p5:`<p>In general, the IRS offers you the most benefits when you sign up to make your payments
            through their direct debit installment agreements, or payroll deduction. Because they are
            automatically receiving your payments in an equal amount every month, they are much more
            inclined to work with you. If your case involves requesting some type of penalty abatement, be
            prepared for more negotiation and longer delays in getting your case resolved. Again, this is the
            best option for those who owe less than $25,000, and have sufficient funds to make the
            payments. </p>`
    },
        {
            title:"What is a Notice of Deficiency?",
            img1:"/nod1.jpg",
            img2:"/nod2.jpg",
            img3:"/nod3.jpg",
            date:"1/11/2021",
            p1:`<p>A notice of deficiency is a letter from the IRS stating that you owe income taxes, along with
                interest and penalties. It is an official notice from the US government that an assessment of
                your tax situation is being conducted, and that you are encouraged to start making payments
                immediately.</p>`,
            p2:`<p>When you file your taxes, the IRS verifies your returns to make sure that are not (purposefully or
                not) neglecting to report any or all of your income. If they find that your return does not match
                what your employer’s return says they paid you, it will trigger the IRS to send a Notice of
                Deficiency, stating that your return has been changed, and that you now owe a balance on your
                income taxes to the IRS. This is yet another reason why it is critical that you file all W2s from
                your employers, even if you only made a small amount from one of them. The importance of
                this cannot be overstated in the context of our growing ‘gig economy.’</p>`,
            p3:`<p>If you’ve received a Notice of Deficiency, then you have 90 days from the date the letter is
                mailed to dispute their assessment. If you believe the IRS is mistaken in their assessment that
                you owe them money, you have the right to appeal. If you choose to appeal your notice of
                deficiency, then it’s highly recommended that you speak with a tax attorney, who can help you
                better prepare your reasons for appeal. A tax attorney can also spot if you are the one who is
                mistaken, and that the IRS is correct that you a balance on your taxes, saving you a lot of time
                and money on an appeal for no reason.</p>`,
            p4:`<p>The main instance in which your notice of deficiency would be dropped is if you can prove that
                  you were a victim of identity theft. This can happen if someone has filed a fraudulent return with
                  the IRS using your stolen social security number. Or, someone could have given your social
                  security number to their employer, which would result in fraudulent W2s being issued in your
                  name, therefore triggering the mismatch between your filed returns and the W2s issued in your
                  name. If this is the case, contact the IRS immediately to explain the reason for the discrepancy.</p>`,
            p5:`<p>If you’ve received a notice of deficiency, do not ignore it. The consequences of ignoring this
                  notice, when you know you have to pay, range from wage garnishment to jail time. If you have
                  no wages, they will start deducting payments from your bank account. If you have nothing in
                  your bank account, they will start taking away everything you own. If you don’t own enough
                  assets to pay off the amount of the debt, then you are subject to incarceration. There are many
                  steps in between a notice of deficiency and jail time, and there are several options available to
                  work with the IRS to reduce your debt, and/or set up payment plans.</p>`
        },
        {
            title:"What is a Notice of Federal Tax Lien?",
            img1:"/lien1.png",
            date: "1/11/2020",
            img2:"/lien2.png",
            img3:"/lien3.jpg",
            p1:`<p>A Notice of Federal Tax Lien is different from a tax lien itself, because the notice declares
                publicly that the IRS has a legal claim on your property (the lien) in the amount of the tax debt
                owed. This is done so that other creditors, such as banks or lenders, are aware that the IRS
                has a greater claim to your property than they do. This means that if your home is foreclosed
                on, the IRS gets paid before the banks and/or mortgage lenders do. Not only do your creditors
                receive this notice, but employers and landlords can also receive this information. This can
                bring your credit score way down, and affect your ability to get a new mortgage or a loan.</p>`,
            p2:`<p>It’s important to know that the amount your notice says that you owe does not take into account
                any payments you’ve made since the date the notice was issued, nor does it include any
                charges associated with issuing the lien itself. If you want to see your balance minus anything
                you’ve paid off recently, you’ll have to call the IRS to see your true balance, which will include
                the extra charges for filing the lien.</p>
                <p>If you wish to appeal a notice of federal tax lien, you have only five business days to do so by
                filing a request for a “Collection Due Process Hearing.” After this court hearing, a determination
                will be made by the Office of Appeals as to whether your lien should remain filed, be released,
                or withdrawn.</p>`,
            p3:`<p>A “release” of a federal tax lien means that the lien itself has been cleared, as well as the public
                notice to creditors. This means banks and other lenders have first priority again in collecting
                payments from you. The only way a federal tax lien will be released is if payment of your debt is
                guaranteed by a bond, or if you’ve agreed on an Offer in Compromise with the IRS. This means
                that you and the IRS have agreed on an amount you will pay them back, which is usually
                significantly lower than the amount you actually owe.</p>`,
            p4:`<p>A federal tax lien “withdrawal” only means that the Notice of a Federal Tax Lien has been
                removed from the public record. This is in no way removes the lien, nor does it erase the debt
                you owe. It merely tells other creditors that the IRS no longer has the greatest claim to your
                property. A withdrawal is most likely to be granted if you’ve entered into a Direct Debit
                Installment Agreement with the IRS, where you’ve agreed to let them take a certain amount
                directly out of your bank account every month.</p>
                <p>A federal tax lien is serious business, but such drastic measures are only taken by the IRS after        
                you’ve been notified several times that you owe taxes and you have still not acknowledged any
                of the notices. A tax lien will affect every area of your financial health. It attaches to all property
                you own like your home or vehicles, any financial assets such as investment income, and any
                future assets you come to own after the lien is issued.</p>`,
             p5:`<p>A tax lien will also bring your credit score way down, which will directly affect your ability to get a
                    loan or a second mortgage. If you own a business, a tax lien also applies to all your business
                    assets including property, equipment, and your accounts receivable. Even if you or your
                    business file for bankruptcy, your federal tax lien and Notice of a Federal Tax lien still apply
                    throughout the bankruptcy process.</p>
                <p>The easiest way to avoid a federal tax lien is to simply file accurate tax returns, and pay any
                   taxes owed to the IRS in a timely manner. It’s certainly easy to avoid your tax debts and let
                   them keep piling up, but eventually you will be subject to a lien and eventually a levy from the
                   IRS. To avoid all this to begin with, click here for more information.</p>`,       
        },
        {
            title:"Why Should I File My Taxes Even if I Can’t Pay?",
            date: "1/11/2020",
            img1:"/file1.jpg",
            img2:"/file2.jpg",
            img3:"/file3.jpg",
            p1:`<p>The main reason to file your taxes even if you can’t pay is that if you don’t file, you’ll end up
                owing the IRS more in the end from penalties and interest. In fact, the IRS can charge you an
                extra “failure to file” penalty, and add up to 25% more to your overall tax bill. This is on top of all 
                the other penalties and interest that they’re already charging you.</p>
                <p>Don’t make the mistake of thinking that if you don’t file your taxes, the IRS won’t be able to find
                you, and thus won’t be able to collect money from you. This is absolutely untrue. The IRS will
                find you, and they will collect from you through federal tax liens, levies, and wage garnishments.
                They will take away everything you own, empty your bank accounts, and eventually put you in
                jail if they have to. Usually it doesn’t get as far as jail time unless you’re Al Capone, because
                the IRS is willing to work with you on paying your tax debt.</p>`,
             p2:`<p>The second reason to file your taxes, even if you can’t pay, is that the IRS has the right to
                withhold future refunds from you down the road. Even if you’re due thousands of dollars in
                refunds from them, the IRS will keep your money because of previous unfiled returns. Another
                incentive to file and claim your refunds is that those refunds can be used towards paying off
                your debt.</p>`,
             p3:`<p>If you let years and years of unfiled returns accumulate, you’ll be in serious trouble. The US
                government can and will prosecute you for “fraudulent failure to file.” This is a serious criminal
                offense and can carry a sentence of jail time. A penalty of this magnitude does require some
                investigation from the IRS to provide clear and convincing evidence that you intentionally did not
                file your taxes in an attempt to avoid paying them.</p>`,
             p4:`<p>The good news is that usually this penalty doesn’t occur if you forgot to file one return, or if you
                filed your returns late. The IRS has to prove criminal intent in court in order to prosecute you for
                fraudulent failure to file. If you somehow find yourself in this difficult position, you do have the
                right to appeal the charges. However appeals are only granted if you are able to show
                reasonable cause, or if you qualify for a first-time abatement. A first-time abatement means that
                the IRS will waive your debt entirely if you meet a certain set of circumstances.</p>`,
              p5:`<p>The bottom line is that you should always file your tax returns on time, even if you know that you
                    owe thousands of dollars. The IRS does have several options to help you with your tax
                    debt--whether it’s waiving it entirely, settling for a much lower amount, or setting up a monthly
                    payment plan. No matter your situation, know that you do have the right and the opportunity to
                    plead your case and explain your circumstances to the IRS.</p>`          
          },
          {
              title:"What kind of help is available to me for my state taxes?",
              date: "1/11/2020",
              img1:"/taxhelp1.jpg",
              img2:"/taxhelp2.jpg",
              img3:"/taxhelp3.jpg",
              p1:`<p>This subject can be a bit complicated, as each state has their own rules for what they will and
                    will not waive for you. The best place to start is with states offering amnesty programs. These
                    programs will waive any late fees and penalties associated with filing your returns late, provided
                    you pay the full balance of your tax debt. They will usually waive any interest associated with
                    your debt as well. Unfortunately as of June 2019, only two states are currently offering amnesty
                    programs for the 2018 tax year--New Jersey and New Mexico.</p>`,
              p2:`<p>The good news is that this changes every year. States can decide to offer amnesty programs at
                    any time, and every year more states implement these programs. The best place to look if your
                    state offers an amnesty program, or will offer one in the future, will be your state’s Department
                    of Revenue website. A simple Google search will provide the answer for each state.</p>
                    <p>Usually if you owe federal taxes to the IRS, you also owe state taxes. The bad news here is
                    that it’s a lot easier and quicker for state tax authorities to find you and start collecting from you
                    than it is for the IRS to do so. State tax boards have a lot more power to put stress on your
                    financial health, so any state tax debts need to be dealt with urgently.</p>`,
              p3:`<p>The reason for this urgency and the aggressiveness of state tax authorities is that state budgets
                    are made up of 100% tax revenue. Therefore, if the state doesn’t collect its taxes, they literally
                    cannot afford to pave roads and take care of basic public works. On the other hand, the IRS is
                    officially part of the US Department of Treasury, which has the power to actually print new
                    money. Thus, the US government doesn’t rely 100% on collecting tax revenue to operate.</p>
                    <p>It’s difficult to provide specific answers for state tax relief, because each of the 50 states have
                    different tax codes. However, there are a few general programs that are available in almost
                    every state in various forms.</p>`,
              p4:`<p>Most states will allow you to pay back your tax debt in installments. It is highly recommended
                    that you go through a tax relief company with accredited tax attorneys on staff who can
                    negotiate a lower rate for you than what your state will offer. That’s why it’s highly
                    recommended to shop and compare tax relief firms who can negotiate on your behalf, especially
                    with your state tax authorities.</p>
                    <p>Many states also offer a “pennies on the dollar” settlement, which is similar to the IRS’ offer in
                    compromise program. This type of settlement is just what it says--your state tax board will settle
                    your debt for less than what you actually owe. The reason why they will settle for a lower
                    amount is so they can at least collect back a portion of what they’re owed, as opposed to
                    collecting nothing, and spending more money on collection activities. This is also why the IRS
                    will settle for a lower amount. Now this program is a lot more difficult to qualify for than a simple
                    installment agreement, and your state will make it very difficult for you to cut through the red
                    tape to do so. Again, this is another good reason to work with a reputable tax relief firm in yourstate.</p>`,
              p5:`<p>Unfortunately, the ugly truth of the matter with state taxes is that it’s difficult even for tax relief
                    firms to negotiate any kind of significant settlement with state tax authorities. It’s nearly
                    impossible to get any help on your own, so don’t go into a negotiation with expectations of
                    reducing your debt by the same amount as you have with the IRS.</p>
                <p>The best place to start dealing with your state tax debt is to do some research on your state’s
                    Department of Revenue website to see what kind of tax relief programs they offer. Most states
                    have a robust Tax Board website which allows you to apply for relief programs completely
                    online, and it’s very simple to create an account to handle all your transactions. You can even             
                    make your payments online and set up an automatic payment plan if you wish. This will also
                    allow you to be more informed if you contact a tax relief firm to help you with trying to negotiate a settlement.</p>`
          }])



    return (
        <div>
            <StickyNavbar />
            <div className="container all-center">
            <h3>Tax FAQS:</h3>
  
            Our blog is updated monthly with a hand full of new issues related to accounting and taxes. Take a moment to review some of our most recent entries.  

            {blogs.map(blog =>(<BlogItem blog={blog} key={blog.title}/>))}
            </div>

        </div>
    )
}

export default TaxFaqs
